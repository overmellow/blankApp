import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result = 0;
  resultDisplay = '0';
  fnum = '';
  snum = '';
  flag = false;
  tempVal;
  operation;

  operations = {
    'add': function(){
      this.result = parseInt(this.fnum) + parseInt(this.snum);
      this.resultDisplay = this.result.toString();
    },
    'subtract': function(){
      this.result = parseInt(this.fnum) - parseInt(this.snum);
      this.resultDisplay = this.result.toString();
    },
    'multiply': function(){
      this.result = parseInt(this.fnum) * parseInt(this.snum);
      this.resultDisplay = this.result.toString();
    },
    'divide': function(){
      this.result = parseInt(this.fnum) / parseInt(this.snum);
      this.resultDisplay = this.result.toString();
    }
  }
  
  constructor(public navCtrl: NavController) {
  }
  
  input(val){    

    if(!this.operations.hasOwnProperty(val)){
      if(this.flag){      
        this.fnum = this.fnum + val;
        this.resultDisplay = this.fnum;
      } else {
        this.snum += val;
        this.resultDisplay = this.snum;  
      }
    } else {
      this.flag = true;
      this.operation = this.operations[val];
      console.log(this.operation);
    }       
  }

  equal(){
    this.operation();
    console.log(this.result);
    
  }

  reset(){
    this.fnum = '';
    this.snum = '';
    this.result = 0;
    this.resultDisplay = '0';
    this.flag = false;
    this.operation = null;
  }

}
