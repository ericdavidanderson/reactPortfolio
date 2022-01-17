//make google docs pdf with resume and put link here
import React from "react";

export default function Contact() {
  return (
    <div>
      <section id="Contact">
        <header>
          <h1>Welcome to Eric Anderson's page</h1>
          <Navigation />
        </header>
        <ul class="ul">
          <li>
            <a href="https://github.com/ericdavidanderson?tab=repositories">
              Github
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/eric-anderson-43bb05106">
              Linkedin
            </a>
          </li>
          <li>
            <a href="425-219-0401">Phone: 425-219-0401</a>
            <a href="burrej1@gmail.com">Email: burrej1@gmail.com</a>
            <a href="https://docs.google.com/document/d/1rCbbWUlGeqhL-Vv9yOXGEABQIdKfjYbeFfCojaf-upg/edit?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
