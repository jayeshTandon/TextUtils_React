import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {
  return (
    <>
      <div className={`jumbotron bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}>
        <h1 className="display-4">Welcome to TextUtils</h1>
        <p className="lead">The best free to use text utility app available on the internet. <br />Supports all browsers. <br />Comes with built-in Dark Mode option.</p>
        <hr className="my-4" />
          <p>Ranked No. 1 by someone</p>
          <Link className="btn btn-primary btn-lg" to="/" role="button">Use App</Link>
      </div>
    </>
  )
}
