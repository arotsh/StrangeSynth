import { Component } from '@angular/core';
import { range } from 'rxjs';
declare var Tone: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  row: Array<any> = [];
  col: Array<any> = [];
  red;
  green;
  blue;
  i = 0;
  afterClickColor;
  singleNote;
  note: Array<any> = [];
  arrayOfColors: string;
  BigColorsArray: Array<any> = [];
  // colors: Array<string> = [];
  constructor() {
    this.row = Array.from({ length: 10 }, (v, k) => k + 1);
    this.col = Array.from({ length: 20 }, (v, k) => k + 1);
  }

  counter = 256;
  synth = new Tone.Synth().toMaster()
 
  

  changeColor(e){
  // console.log(e)
  this.counter++;

  this.note = [
    "C2",
    "D#2",
    "F2",
    "F#2",
    "G2",
    "A#2",
    "C3",
    "D#3",
    "F3",
    "F#3",
    "G3",
    "A#3",
    "C4",
    "D#4",
    "F4",
    "F#4",
    "G4",
    "A#4",
    "C5",
    "D#5",
    "F5",
    "F#5",
    "G5",
    "A#5"
    
  ]



  console.log(this.note[this.i])


  this.singleNote = this.note[this.i];

  this.i += 1
  


  this.synth.triggerAttackRelease(this.singleNote, "4n");

  this.afterClickColor = ' linear-gradient(to right top, rgb(112, 25, 131), #c174f8)';

  
  this.red = Math.floor(Math.random() * 255 + 10);
  this.green = Math.floor(Math.random() * 255 + 10);
  this.blue = Math.floor(Math.random() * 255 + 10);
  this.arrayOfColors = "rgb(" + this.red + "," + this.green+ "," + this.blue + ")";
  this.BigColorsArray.push(this.arrayOfColors);
  // console.log(this.arrayOfColors);
      
  if( this.note[this.i] == "A#5"){
    this.i = 0
  }

  let colors = this.BigColorsArray;
  if (this.counter > 255) {
    this.counter = 0
  }
  let randomColor = colors[this.counter]
  e.target.style.background = randomColor;
  setTimeout(() => { e.target.style.backgroundImage = this.afterClickColor }, 200)
}
}

