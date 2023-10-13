
import './App.css';
import React from "react";
import Pyramid from './Component/Pyramid';
import Rightangletriangle from './Component/Rightangletrangle';
import Square from './Component/Square';
import MirrorRightangle from './Component/MirrorRightangle';
import HollowSquare from './Component/HollowSquare';


function App() {
  return (
    <div className="App">
      <h1>Pyramid pattern</h1>
      <Pyramid/>
      <h1>Rightangletriangle pattern</h1>
      <Rightangletriangle/>
      <h1>Square pattern</h1>
      <Square/>
      <h1>Mirror Rightangle pattern</h1>
      <MirrorRightangle/>
      <h1>Hollow Square pattern</h1>
      <HollowSquare/>
    </div>
  );
  }
export default App;
