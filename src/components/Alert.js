import React from 'react'

export default function Alert(props) {
    const capitalize = () => {
        let text = props.alertText.type
        let firstLetter = text.charAt(0).toUpperCase()
        return (firstLetter.concat(text.slice(1, text.length)))
    }
    return (
        <div className="h-100">
            {
                props.alertText && <div className={`alert alert-${props.alertText.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize()}:</strong>  {props.alertText.message}
                    <button type='button' className='btn-close' data-bs-dismiss="alert" aria-label='Close'></button>
                </div>
            }
        </div>
    )
}
