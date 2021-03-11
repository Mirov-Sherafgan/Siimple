import React from 'react';
import background from './hero-bg.jpg';

export default function Header() {
    return (
        <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <img src={background} className="appLogo" alt="bglogo"  />
        <h2 className="text">Siimple</h2>
        <div className="maintext">
        <h1>Welcome to Siimple</h1>
        <h5>Please, fill out the for below to be notified for the latest updates!</h5>
        </div>
        <div className="login-form">
        <label for="name"></label>
        <input type="text" placeholder="Your Name"></input>
        <label for="password"></label>
        <input type="password" placeholder="Your Password"></input>
        </div>
        <button className="btn" ><a href="#" >Notify me!</a></button>
      </header>
    )
}
