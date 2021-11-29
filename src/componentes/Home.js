import React, { Component } from 'react'
import Imagem from './Imagem/Meme.jpg';
import Button from './Button.js'

export default class Home extends Component {
    render() {
        return (
            <div>
            <h1 id="text"> Apresentação Git & GitHub </h1>

             <div className='img'>
                 <img src={Imagem} width="350px" height="350px"/>
             </div>

             < Button />
    

            </div>
        )
    }
}
