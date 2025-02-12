import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <h1>Welcome to Utilities</h1>
    <nav>
      <Link to="RandomGen">Random Generator</Link> <br />
      {/* <Link to="encode">Base64 Encoder</Link> <br />
      <Link to="decode">Base64 Decoder</Link> */}
    </nav>
  </div>
)
}
