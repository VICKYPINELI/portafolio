import React from "react";
// import { ArrowRightIcon } from "@heroicons/react/solid";

export default function Navbar() {
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-toggler">
          {/* <a class="navbar-brand" href="#">
            <img src="imagenes/icono.png" width="50" alt="Logo de la página web">
          </a> */}
          <ul class="navbar-nav d-flex justify-content-center align-items-center">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page"href="#about" >Sobre mí</a>
            </li>
   
            <li class="nav-item">
              <a class="nav-link" href="#testimonials">Testimonios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contacto</a>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
}