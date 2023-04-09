import React, { useState } from 'react'
import propTypes from "prop-types"
import Summary from './Summary'

export default function Textbox(props) {
    const [text, setText] = useState("")

    const [isHidden, setIsHidden] = useState(true)
    const handleOnTextChange = (event) => {
        console.log(event)
        setText(event.target.value)
    }

    const changeToUppercase = () => {
        setText(text => { return (text.toUpperCase()) })
    }

    const changeToLowercase = () => {
        setText(text => { return (text.toLowerCase()) })
    }

    const clear = () => {
        setText("")
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text)
            .then(() => { 
                setIsHidden(old => { return !old }) 
                setTimeout(()=>{setIsHidden(old => { return !old })},1000)
            })
            .catch(() => { alert("unable to copy") })
    }

    const removeExtraSpaces = () => {
        setText((oldText) => { return (oldText.split(/[ ]+/).join(" ")) })
    }

    return (
        <div className='container'>
            <h1 className={`row mt-3 text-${props.mode==="light"?"dark":"light"}`} >{props.heading}</h1>

            <div className="row my-3">
                <div className='d-flex justify-content-end align-items-center'>
                    <i className="fa-sharp fa-solid fa-copy fa-2xl mx-4" type="button" style={{color:props.mode==="dark"?"white":"black"}} onClick={copyToClipboard}></i>
                    <button type="button" className={`btn btn-${props.mode==="light"?"dark":"primary"} btn-outline-${props.mode==="light"?"secondary":"light"}`}  onClick={clear}>clear</button>
                </div>
                <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="4" onChange={handleOnTextChange} ></textarea>
                <p hidden={isHidden} className='text-center align-middle bg-dark text-light'>copied</p>
            </div>

            <div className="row my-3">
                <button type="button" className={`col-sm-3 btn btn-${props.mode==="light"?"dark":"primary"} btn-outline-${props.mode==="light"?"secondary":"light"}`} onClick={changeToUppercase}>Change to Uppercase</button>
                <button type="button" className={`col-sm-3 btn btn-${props.mode==="light"?"dark":"primary"} btn-outline-${props.mode==="light"?"secondary":"light"}`} onClick={changeToLowercase}>Change to Lowercase</button>
                <button type="button" className={`col-sm-3 btn btn-${props.mode==="light"?"dark":"primary"} btn-outline-${props.mode==="light"?"secondary":"light"}`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button type="button" className={`col-sm-3 btn btn-${props.mode==="light"?"dark":"primary"} btn-outline-${props.mode==="light"?"secondary":"light"}`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            </div>

            <div className="row my-3">
                <Summary mode={props.mode} text={text}></Summary>
            </div>

            <div className="row my-3">
                <h2 className={`text-${props.mode==="light"?"dark":"light"}`} >Preview</h2>
                <p className={`text-${props.mode==="light"?"dark":"light"}`} >{text===""?"No text added yet":text}</p>
            </div>
        </div>
    )
}
Textbox.propTypes = { heading: propTypes.string.isRequired }
Textbox.defaultProps = { heading: "Enter Your Text Here" }

