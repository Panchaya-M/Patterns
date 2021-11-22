import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'patterns';
  number: number = 0
  arr = []

  getPatterns() {

    this.simplePyramid()
    this.rightTriangle()
    this.hollowPyramid()
    this.crossStar()
    this.alphabet()

    this.number = 0
  }

  simplePyramid() {
    let pyramid = ''
    for(let i = 0; i < this.number; i++) {
      for(let j = 0; j < i; j++) {
        pyramid += "* "
      }
      pyramid += "\n"
    }
    console.log("Simple Pyramid" + pyramid)
  }

  rightTriangle() {
    let rightTriangle = ''
    let x = 2 * this.number - 2
    for(let i = 0; i < this.number; i++) {
      for (let j = 0; j < x; j++) { 
        rightTriangle += " " 
      }
      x = x - 2
      for(let j = 0; j < i; j++) { 
        rightTriangle +=  "* " 
      }
      rightTriangle += "\n"
    }
    console.log("Right Triangle\n" + rightTriangle)
  }

  hollowPyramid() {
    let hollowPyramid = ''
    let i = 1
    while (i <= this.number) {
      let j = this.number
      while (j > i) {
        hollowPyramid += " "
        j -= 1
      }
      hollowPyramid += "*"
      let k = 1
      while (k < 2*(i-1)) {
        hollowPyramid += " "
        k += 1
      }
      if (i == 1) { hollowPyramid += " " }
      else { hollowPyramid += "*" }
      i += 1
      hollowPyramid += "\n"
    }
    console.log('Hollow Pyramid\n' + hollowPyramid)

  }

  crossStar(){
    let crossStar = ''
    for (let i = 1; i < 2*this.number; i++) {
      for (let j = 1; j < 2*this.number; j++) {
        if (i==j || i+j == 2*this.number) {
          crossStar += "*"
        }
        else { crossStar += " " }
      }
      crossStar += "\n"
    }
    console.log('Cross Star\n' + crossStar)
  }

  alphabet() {
    let alphabet = ''
    for(let i = 0; i < this.number; i++) {
      for(let j = this.number - 1; j > i; j = j-1){
        alphabet += "A"
      }
      alphabet += "+"
      for(let l = 0; l < i; l++) {
        if (l == i-1) {
          for (let a = 1; a < l; a++) {
            alphabet += "E"
          }
          alphabet += "+"
        }
      }
      for(let k = i+1; k < this.number; k++) {
        alphabet += "B"
      }
      alphabet += "\n"
    }
  }

}
