import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/merge.js';
import { getbubbleSortAnimations } from '../SortingAlgorithms/bubble.js';
import { getheapSortAnimations } from '../SortingAlgorithms/heap.js';
import { getquickSortAnimations } from '../SortingAlgorithms/quick.js';
import './SortingVisualizer.css';
import { toHaveAccessibleDescription } from '@testing-library/jest-dom/dist/matchers.js';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1  ;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 200 ;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'rgba(66, 134, 244, 0.8)';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'yellow';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }


  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(10,600));
    }
    this.setState({array});
    const arrayBars = document.getElementsByClassName('array-bar');
    for(let i = 0 ; i<arrayBars.length; i++){
        arrayBars[i].style.backgroundColor='rgba(66, 134, 244, 0.8)';
    } 
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      console.log(animations[i]);
      const arrayBars = document.getElementsByClassName('array-bar');
      const [barOneIdx, barTwoIdx , isColorChange,second] = animations[i];
       
    
      if (isColorChange==="color") {
         
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = second;
        // if (second ===3){
        //   color = "red";
        // }
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor  = color;
        }, i * ANIMATION_SPEED_MS);  
      } 
      
      else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    
    const animations = getquickSortAnimations(this.state.array );
    console.log(  this.state.array);
    console.log(animations);
    const n = this.state.array.length;
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [barOneIdx, barTwoIdx , isColorChange,second] = animations[i];
       
    
      if (isColorChange==="color") {
         
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = second;
        // if (second ===3){
        //   color = "red";
        // }
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor  = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }


    setTimeout(() => {
      const arrayBars = document.getElementsByClassName('array-bar');
      for(let i = 0 ; i<arrayBars.length; i++){
          arrayBars[i].style.backgroundColor='green';
      } 
    }, n*n/4);

    
  } 

  heapSort() {
     const animations = getheapSortAnimations(this.state.array);
     console.log(this.state.array);
     for (let i = 0; i < animations.length; i++) {
      console.log(animations[i]);
      const arrayBars = document.getElementsByClassName('array-bar');
      const [barOneIdx, barTwoIdx , isColorChange,second] = animations[i];
       
    
      if (isColorChange==="color") {
         
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = second;
        // if (second ===3){
        //   color = "red";
        // }
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor  = color;
        }, i * ANIMATION_SPEED_MS);  
      } 
      
      else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  bubbleSort() {
    const animations = getbubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [barOneIdx, barTwoIdx , isColorChange,second] = animations[i];
       
    
      if (isColorChange==="color") {
         
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = second;
        // if (second ===3){
        //   color = "red";
        // }
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor  = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  } 

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
 

  render() {
    const {array} = this.state;

    return (
      <div className='array-container'>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}></div>
        ))}
        <div></div>
        <div></div>
        <div >
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
 
        </div>

      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
 