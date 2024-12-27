import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light position-fixed top-0 z-2 start-0 end-0 py-3" id="#navbar-example2">
            <div className="container">
                <a className="navbar-brand text-uppercase text-white fw-bolder fs-2" href="#">Start framework</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-uppercase text-white fw-bold p-2 mx-3 rounded-2" aria-current="page" href="#about">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase text-white fw-bold p-2 mx-3 rounded-2" href="#portfolio">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-uppercase text-white fw-bold p-2 mx-3 rounded-2" href="#contact">contact</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}