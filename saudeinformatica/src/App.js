import React, { Component } from 'react'
import logo from './img/logo.png'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="col s12">

        <div className="background">
          <div className="bg-color">
            <nav className="container">
              <div className="nav-wrapper">
                <a href="" className="brand-logo"><img src={logo} alt="logo" /></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="">Início</a></li>
                  <li><a href="">Serviços</a></li>
                  <li><a href="">Contato</a></li>
                </ul>
              </div>
            </nav>
            <div className="container">
              <div className="banner-info">
              <img src={logo} alt="banner-logo" />
              <h1>SOLUÇÕES EM SISTEMAS DE SAÚDE</h1>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <div className="container">
            <p>Copyright &copy; jacksonpassos.com 2018</p>
          </div>
        </footer>


      </div>
    );
  }
}

export default App;
