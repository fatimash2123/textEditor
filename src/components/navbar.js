import React from 'react'
import propTypes from "prop-types"
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>

                <div className="form-check form-switch mx-5">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.onClickFunction} ></input>
                    <label className={`form-check-label text-${props.mode === "dark" ? "light" : "dark"}`} for="flexSwitchCheckDefault">{(props.mode) === "light" ? "Dark" : "Light"} Mode</label>  
                </div>
                <div className='row d-flex flex-row mx-3'>
                    <div className='bg-success rounded mx-2' type="button" style={{width:30,height:30}} onClick={()=>{props.paletteFunction("success")}}></div>
                    <div className='bg-danger rounded mx-2' type="button" style={{width:30,height:30}} onClick={()=>{props.paletteFunction("danger")}}></div>
                    <div className='bg-warning rounded mx-2' type="button" style={{width:30,height:30}} onClick={()=>{props.paletteFunction("warning")}}></div>
                </div>

               
           

            </nav>

        </div>
    )
}
Navbar.propTypes = { title: propTypes.string.isRequired }
Navbar.defaultProps = { title: "Navbar" }
