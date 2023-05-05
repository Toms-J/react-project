import React, { Component } from 'react';
import './index.css';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {     //è una variabile readonly
            username: 'Tommaso Cenedese'
        }
        // this.handleClick = this.handleClick.bind(this); //bind nel constructor, si può fare anche direttamente nel render, utilizzando un'arrow function o definendo il metodo handleClick direttamente come un'arrow function 
    }

    setUsername = () => {
        this.setState({username: 'Mario Rossi'});
    }

    handleClick() {
        console.log(this)
    }

    render() {
        const { image, name, status, species } = this.props.character;
        return (
            <>
            <h1>{this.state.username}</h1>
            <div className='card'>
                <img src={image} alt="img" onClick={this.setUsername}></img>
                <h2>{name}</h2>
                <p>{status} - {species}</p>
            </div>
            </>
        )
    }
}

export default Card;