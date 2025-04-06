import React from 'react'
import "./style.css";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm navbar-dark">
            <div class="container">
                <a href="#" class="navbar-brand"><i class="fa-solid fa-cloud"></i></a>
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar1">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbar1" class="collapse navbar-collapse">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-2">
                            <a href="#" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a href="#" class="nav-link">About</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a href="#" class="nav-link">Work</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a href="#" class="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar