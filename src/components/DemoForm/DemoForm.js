import "./DemoForm.css"
import React from "react"
import {useState} from "react";

const DemoForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [middleName, setMiddleName] = useState("")


    return (
        <div className={'demo-form'}>
            <form className={"form"}>
                <input value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                <input value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <input value={middleName} onChange={(e)=>setMiddleName(e.target.value)}/>
            </form>
        </div>
    )
}

export default DemoForm