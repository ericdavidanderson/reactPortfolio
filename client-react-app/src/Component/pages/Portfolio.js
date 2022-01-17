import React from "react";
// import Header from "./Component/Header";


export default function Portfolio(){
    return (
      <div>
        <section id="Portfolio">
          <header>
            <h1>Welcome to Eric Anderson's page</h1>

            <ul>
              <li href="https://gist.github.com/ericdavidanderson/5999958da230927118088fb4e5a9cfdc">
                {" "}
                Regex Tutorial{" "}
              </li>
              <li href="https://ericdavidanderson.github.io/randompasscodegen">
                {" "}
                Password Generator{" "}
              </li>
              <li href="https://ericdavidanderson.github.io/codequiz4/">
                {" "}
                Code Quiz
              </li>
            </ul>
          </header>
        </section>
      </div>
    );
}