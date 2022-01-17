import React from "react";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import About from "./About";

export default function Navigation() {
  return (
    <div class="Links">
      <ul class="ul">
        <li>
          <a href='#Portfolio'>Portfolio</a>
        </li>

        <li>
          <a href="#Contact"> Contact</a>
        </li>
        <li>
          <a href="#About"> About me </a>
        </li>
      </ul>
    </div>
  );
}
