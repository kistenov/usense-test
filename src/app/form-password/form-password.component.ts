import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.scss']
})
export class FormPasswordComponent implements OnInit {

  formPassword:string;

  sec1: string = 'gray';
  sec2: string = 'gray';
  sec3: string = 'gray';

  constructor() { }

  ngOnInit(){
    this.initForm();
  }
  initForm(){
    
  }


  checkPasswordStrength() {

    if (this.formPassword.length === 0) {
      console.log('0');
      
      return this.setStrenght(0);
    }
    
    if (this.formPassword.length < 8) {
      console.log('1');
      return this.setStrenght(1);;
    }
    
    const onlyLetters = /^[a-zA-Z]+$/g;
    const onlyNumbers = /^[0-9]+$/g;
    const onlySymbols = /^[`~!@#$%^&*()\-_=+\[{\]};:'"\\|,<.>/? ]+$/g;

    
    if (
      onlyLetters.test(this.formPassword) ||
      onlyNumbers.test(this.formPassword) ||
      onlySymbols.test(this.formPassword)
      ) {
        console.log('2');
        return this.setStrenght(2);
    }

    const lettersNumbers = /^[a-zA-Z0-9]+$/g;
    const lettersSymbols = /^[a-zA-Z`~!@#$%^&*()\-_=+\[{\]};:'"\\|,<.>/? ]+$/g;
    const numbersSymbols = /^[0-9`~!@#$%^&*()\-_=+\[{\]};:'"\\|,<.>/? ]+$/g;

    
    if (
      lettersNumbers.test(this.formPassword) ||
      lettersSymbols.test(this.formPassword) ||
      numbersSymbols.test(this.formPassword)
      ) {
        console.log('3');
        return this.setStrenght(3);
      }
      
      const lettersNumbersSymbols = /^[a-zA-Z0-9`~!@#$%^&*()\-_=+\[{\]};:'"\\|,<.>/? ]+$/g
      
      if (lettersNumbersSymbols.test(this.formPassword) ) {
        console.log('4');
        return this.setStrenght(4);
    }
// my password is strong!
  }

  setStrenght(strenght){
    switch(strenght){
      case 0 :
        this.sec1 = 'gray';
        this.sec2 = 'gray';
        this.sec3 = 'gray';
        break;
      case 1 :
        this.sec1 = 'red';
        this.sec2 = 'red';
        this.sec3 = 'red';
        break;
      case 2 :
        this.sec1 = 'red';
        this.sec2 = 'gray';
        this.sec3 = 'gray';
        break;
      case 3 :
        this.sec1 = 'yellow';
        this.sec2 = 'yellow';
        this.sec3 = 'gray';
        break;
      case 4 :
        this.sec1 = 'green';
        this.sec2 = 'green';
        this.sec3 = 'green';
        break;
    }
  }

}
