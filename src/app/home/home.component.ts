import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CharactersComponent } from '../characters/characters.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  miformulario = new FormGroup({
    username : new FormControl('',[
      Validators.required,
       Validators.maxLength(10), 
       Validators.minLength(4)
      ]),
    pass: new FormControl('',[
      Validators.required, 
      Validators.maxLength(10),
       Validators.minLength(4)
      ])
  });


  onSubmit() {
    if (this.miformulario.valid) {
      console.log(this.miformulario.value);
      alert("Bienvenido");
      CharactersComponent
    } else {
      alert("ERROR!");
    }
  }

  
}
