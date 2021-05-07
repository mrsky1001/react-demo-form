import './DemoForm.css'
import React from 'react'
import {useState} from 'react';
import LoadingSymbol from '../LoadingSymbol/LoadingSymbol';

const DemoForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const countries = ['Таиланд', 'Индонезия', 'Малайзия', 'Вьетнам']

    const [loading, setLoading] = useState(false)
    const [isSentForm, setIsSentForm] = useState(false)
    const messageClasses = {SUCCESS: 'form-success-message', ERROR: 'form-error-message'}
    const messageTemplates = {
        FORM_SENT: {classes: messageClasses.SUCCESS, text: 'Форма успешно отправлена!'},
        FORM_NOT_SENT: {classes: messageClasses.ERROR, text: 'Форма не была отправлена!'},
    }
    const [resMessage, setResMessage] = useState(messageTemplates.FORM_SENT)

    const submitForm = (e) => {
        setLoading(true)
        fetch('https://httpbin.org/delay/3', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                middleName: middleName,
                phone: phone,
                country: country
            })
        }).then((res) => {
            setResMessage(messageTemplates.FORM_SENT)
        }).catch((res) => {
            setResMessage(messageTemplates.FORM_NOT_SENT)
        }).finally(() => {
            setLoading(false)
            setIsSentForm(true)
        })

        e.preventDefault();
    }

    return (
        <div className={'demo-form'}>
            <h2>Demo Form</h2>
            <form
                id={'demo-form'}
                onSubmit={submitForm}
                className={'form'}
            >
                <section className={'form-row'}>
                    <input
                        form={'demo-form'}
                        name={'lastName'}
                        placeholder={'Фамилия'}
                        className={'form-control'}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}/>
                    <input
                        form={'demo-form'}
                        name={'firstName'}
                        placeholder={'Имя'}
                        className={'form-control'}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}/>
                    <input
                        form={'demo-form'}
                        name={'middleName'}
                        placeholder={'Фамилия'}
                        className={'form-control'}
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}/>
                </section>
                <section className={'form-row'}>
                    <input
                        form={'demo-form'}
                        name={'phone'}
                        placeholder={'Телефон'}
                        className={'form-control'}
                        type={'number'}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}/>
                    <select
                        form={'demo-form'}
                        name={'country'}
                        placeholder={'Страна'}
                        className={'form-control form-select'}
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    >
                        {countries.map((country, idx) =>
                            <option key={idx}>{country}</option>
                        )}
                    </select>
                </section>
                <section className={'form-actions-row'}>
                    {isSentForm ?
                        <p className={'form-control ' + resMessage.classes}> {resMessage.text}</p>
                        : loading ? <LoadingSymbol/>
                            : <>
                                <div className={'form-control empty-control'}/>
                                <button
                                    form={'demo-form'}
                                    className={'form-control form-button'}
                                    type={'submit'}>
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