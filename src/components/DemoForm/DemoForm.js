import "./DemoForm.css"
import React from "react"
import {useState} from "react";

const DemoForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [phone, setPhone] = useState("")
    const [country, setCountry] = useState("")

    const countries = ['Таиланд', 'Индонезия', 'Малайзия', 'Вьетнам']

    return (
        <div className={'demo-form'}>
            <h2>Demo Form</h2>
            <form className={"form"}>
                <section className={"form-row"}>
                    <input
                        placeholder={"Фамилия"}
                        className={"form-control"}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}/>
                    <input
                        placeholder={"Имя"}
                        className={"form-control"}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}/>
                    <input
                        placeholder={"Фамилия"}
                        className={"form-control"}
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}/>
                </section>
                <section className={"form-row"}>
                    <input
                        placeholder={"Телефон"}
                        className={"form-control"}
                        type={"phone"}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
                    <select
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

            </form>
        </div>
    )
}

export default DemoForm