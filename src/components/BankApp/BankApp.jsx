// BankApp.js
import React, { Component } from 'react';
import Design from './Design.png'

class BankApp extends Component {
  openFigma = () => {
    window.open('https://www.figma.com/file/WrE521D2SO6Uz0ycn0aFh1/Bank-app-design-(Community)?type=design&node-id=0-1&mode=design&t=gZ556YTTqjFzAR7L-0', '_blank');
  }

  openOrigin = () => {
    window.open('https://dribbble.com/shots/17403958-Bank-app-UI-design-concept', '_blank');
  }

  render() {
    return (
      <div style={{background: 'linear-gradient(to bottom right, #22224b, #323877)'}} className="flex justify-around h-screen">
        <div className='flex justify-around border-r-2 items-center w-1/2 h-full'>
          <div>
            <img src={Design} alt="Bank App Design" className="w-fit" />
          </div>
          
          <div className='text-white text-lg'>
            <h1>Bank App Design</h1>
            <p>Design By: Kristina Anfalova</p>
            <button onClick={this.openFigma} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-lg">Open in Figma</button>
            <button onClick={this.openOrigin} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Origin of Work</button>
          </div>
        </div>
        <div className='w-1/2 border-l-2 flex flex-col justify-around text-center'>
          <h1 className='text-2xl text-white'>Test</h1>
          <h1 className='text-2xl text-white'>Test</h1>
        </div>
      </div>
    );
  }
}

export default BankApp;