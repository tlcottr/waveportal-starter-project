import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
        I built this app to allow users to send wave emojis to eachother. Connect your Wallet to send a Wave!
        </div>
        <hr></hr>
        <div class="waveButton" onClick={wave}>
          Wave at Me
        </div>
      </div>
    </div>
  );
}
