import React, { Component } from 'react';
// import logo from '../logo.svg';


class Header extends Component {
    render() {
        
        return (
            
                <header className="top">
             <h1>
                    {this.props.titulo}
             </h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
         
        
        </header>
           
        );
    }
}

export default Header;