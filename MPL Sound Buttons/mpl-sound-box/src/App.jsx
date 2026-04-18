import { useState, useEffect, useCallback, useRef, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import dotballSound from './assets/sounds/faahhh.mp3'
import wideBallSound from './assets/sounds/wideball.mp3'
import boundarySound from './assets/sounds/gajabsound.mp3'
import matchStartSound from './assets/sounds/matchstart.mp3'
import sixSound from './assets/sounds/thatshuge.mp3'
import wicketSound from './assets/sounds/wicket.mp3'
import noballSound from './assets/sounds/noball.mp3'
import './App.css'

function App() {
 const dotballRef=useRef(null);
 const wideBallRef=useRef(null);
 const boundaryRef=useRef(null);
 const matchStartRef=useRef(null);
 const sixRef=useRef(null);
 const wicketRef=useRef(null);
 const noballRef=useRef(null);
 
 useEffect(()=>{
  dotballRef.current=new Audio(dotballSound);
  wideBallRef.current=new Audio(wideBallSound);
  boundaryRef.current=new Audio(boundarySound);
  matchStartRef.current=new Audio(matchStartSound);
  sixRef.current=new Audio(sixSound);
  wicketRef.current=new Audio(wicketSound);
  noballRef.current=new Audio(noballSound);
 })

 const handleDotBall=()=>{
  if(dotballRef.current){
    dotballRef.current.currentTime=0;
    dotballRef.current.play();
  }
 }

 const handleWideBall=()=>{
  if(wideBallRef.current){
    wideBallRef.current.currentTime=0;
    wideBallRef.current.play();
  }
 }

 const handleMatchStart=()=>{
  if(matchStartRef.current){
    matchStartRef.current.currentTime=0;
    matchStartRef.current.play();
  }
 }

 const handleBoundary=()=>{
  if(boundaryRef.current){
    boundaryRef.current.currentTime=0;
    boundaryRef.current.play();
  }
 }

 const handleSix=()=>{
  if(sixRef.current){
    sixRef.current.currentTime=0;
    sixRef.current.play();
  }
 }

 const handleWicket=()=>{
  if(wicketRef.current){
    wicketRef.current.currentTime=0;
    wicketRef.current.play();
  }
 }

 const handleNoBall=()=>{
  if(noballRef.current){
    noballRef.current.currentTime=0;
    noballRef.current.play();
  }
 }



  return (
    <div>
      <button onClick={handleDotBall}>Dot Ball</button>
      <button onClick={handleWideBall}>Wide Ball</button>
      <button onClick={handleMatchStart}>Match Start</button>
      <button onClick={handleBoundary}>Boundary</button>
      <button onClick={handleSix}>Six</button>
      <button onClick={handleWicket}>Out</button>
      <button onClick={handleNoBall}>No Ball</button>
    </div>
  )
}

export default App
