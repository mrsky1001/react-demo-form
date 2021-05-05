import "./DemoForm.css"
import React from "react"
import {useState} from "react";
import LoadingSymbol from "../LoadingSymbol/LoadingSymbol";

const DemoForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")
    const countries = ['Таиланд', 'Индонезия', 'Малайзия', 'Вьетнам']
    const [loading, setLoading] = useState(false)
    const [isSentForm, setIsSentForm] = useState(false)

    const submitForm = () => {
        setLoading(true)
        setIsSentForm(true)
    }

    return (
        <div className={'demo-form'}>
            <h2>Demo Form</h2>
            <form
                id={"demo-form"}
                action={"https://localhost/form"}
                onSubmit={submitForm}
                className={"form"}
                method={"post"}
            >
                <section className={"form-row"}>
                    <input
                        form={"demo-form"}
                        name={"lastName"}
                        placeholder={"Фамилия"}
                        className={"form-control"}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}/>
                    <input
                        form={"demo-form"}
                        name={"firstName"}
                        placeholder={"Имя"}
                        className={"form-control"}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}/>
                    <input
                        form={"demo-form"}
                        name={"middleName"}
                        placeholder={"Фамилия"}
                        className={"form-control"}
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}/>
                </section>
                <section className={"form-row"}>
                    <input
                        form={"demo-form"}
                        name={"phone"}
                        placeholder={"Телефон"}
                        className={"form-control"}
                        type={"number"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
                    <select
                        form={"demo-form"}
                        name={"country"}
                        placeholder={"Страна"}
                        className={"form-control form-select"}
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        {countries.map((country, idx) =>
                            <option key={idx}>{country}</option>
                        )}
                    </select>
                </section>
                <section className={"form-actions-row"}>
                    {isSentForm ?
                        <p className={"form-control form-success-message"}> Форма успешно отправлена!</p>
                        : loading ? <LoadingSymbol/>
                            : <>
                                <div className={"form-control empty-control"}/>
                                <button
                                    form={"demo-form"}
                                    className={"form-control form-button"}
                                    type={"submit"}>
                                    Отправить
                                </button>
                            </>
                    }
                </section>

            </form>
        </div>
    )
}

export default DemoForm