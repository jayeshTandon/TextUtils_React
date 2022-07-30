import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <Link className="navbar-brand" to="/">TextUtils</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1" onClick={props.toggleMode} />
                        <label className={`custom-control-label text-${props.mode==='dark'?'light':'dark'} `} htmlFor="customSwitch1">DarkMode</label>
                    </div>
                </div>
            </nav>
        </>
    )
}
