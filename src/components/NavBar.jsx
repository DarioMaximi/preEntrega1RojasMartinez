import React from "react";

const NavBar = () => {
    return (
        <nav className ="navbar navbar-expand-lg">
                <div className ="container-fluid">
                <a className ="navbar-brand" href="#"><img src="images/logo.png" width={50}></img></a>
                <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className ="navbar-toggler-icon"></span>
                </button>
                <div className ="collapse navbar-collapse" id="navbarNav">
                    <ul className ="navbar-nav">
                        <li className ="nav-item">
                            <a className ="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className ="nav-item">
                            <a className ="nav-link" href="#">Cursos</a>
                        </li>
                        <li className ="nav-item">
                            <a className ="nav-link" href="#">Alma Lider</a>
                        </li>
                        <li className ="nav-item">
                            <a className ="nav-link" href="#">Escuela</a>
                        </li>
                    </ul>
                </div>
                </div>
        </nav>
    )

}

export default NavBar