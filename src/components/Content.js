import React from 'react'
import "../components/Content.css"

export default function Content() {
  return (
    <div>
        <div className="container mt-max mb-max">
            <div className="row align-items-center">
                <div class="col-md-6 d-flex justify-content-start text-align-start">
                    <div className="row row-cols-1 g-3">
                        <h2 class="col">Atomic Content</h2>
                        <p class="col">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cumque?</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end"style={{height:350}}>
                    <img src="https://i.pinimg.com/736x/e4/36/06/e43606c84660f068bb821c526c907eee.jpg" alt="content1" />
                </div>
            </div>
        </div>
        <div className="container mt-max mb-max">
            <div className="row align-items-center">
                <div className="col-md-6 d-flex justify-content-start"style={{height:350}}>
                    <img src="https://i.pinimg.com/736x/e4/36/06/e43606c84660f068bb821c526c907eee.jpg" alt="content1" />
                </div>
                <div class="col-md-6 d-flex justify-content-end text-align-center">
                    <div className="row row-cols-1 g-3">
                        <h2 class="col">Atomic Content</h2>
                        <p class="col">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, cumque?</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
