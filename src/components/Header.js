import React from 'react'
import "../components/header.css"
import { Button } from 'react-bootstrap'

export default function Header() {
  return (
    <div class="headerClass justify-content-center align-items-center d-flex ">
        
        <div className="container ">
          <div className="col-12">
            <h2>Atomic Lite - Home</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus mollitia, deleniti non perferendis similique deserunt!</p>
            <Button>Call To Action</Button>
          </div>
        </div>
    </div>
  )
}
