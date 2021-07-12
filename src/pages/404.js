import React from "react"
import { Link } from "gatsby"

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container"></div>
      </main>
      <h2>There was a problem. This page probably doesn't exist.</h2>
      <Link to="/" className="">
        To home page.
      </Link>
    </>
  )
}

export default Error
