import React from 'react'
import propTypes from "prop-types"

export default function Summary(props) {
    return (
        <div>
            <h2 className={`text-${props.mode==="light"?"dark":"light"}`} >{props.heading}</h2>
            <div>
                <p className={`mb1 text-${props.mode==="light"?"dark":"light"}`} >Total no of words are {props.text.split(/\s+/).filter((val)=>val.length!==0).length} </p>
                <p className={`mb1 text-${props.mode==="light"?"dark":"light"}`} >Total no of characters are {props.text.split("").length}</p>
                <p className={`mb1 text-${props.mode==="light"?"dark":"light"}`} >Total reading time is {props.text.split(/\s+/).length * 0.008} Minutes</p>
            </div>
        </div>
    )
}

Summary.propTypes = { heading: propTypes.string.isRequired, text: propTypes.string.isRequired }
Summary.defaultProps = { heading: "Summary", text: "" }