import React, { Component } from 'react'

export default class Button extends Component {

    Click = () => {
                
    const body = document.querySelector('body')
    body.classList.toggle('bodyWhite')
            
   };


    render() {
        return (
            <div className='button' >
               <button
               type='submit'
               onClick={ this.Click }
               >
                Modo
               </button>
            </div>
        )
    }
}
