import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="">
        <div className="">
          <h1 className="">
            KAIXO, Vicky naiz....
            <br className="" />Me encanta construir aplicaciones web.
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="">
            <a
              href="#contact"
              className="">
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="">
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>
        <div className="">
          <img
            className=""
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}