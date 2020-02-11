import { Component, OnInit } from '@angular/core';
// IMPORT PROPIA PARA EL FROM CONTROL
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  name = new FormControl(''); // Establecer el valor inicial para el form

  updateName(){
    this.name.setValue("Nancy"); //Actualizar un form 
  }
  
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}
