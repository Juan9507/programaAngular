import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
// Import formGroup y formcontrol
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    secondName: new FormControl('')
  });

  @ViewChild("input1") input1: ElementRef;
  @ViewChild("input2") input2: ElementRef;
  @ViewChild("input3") input3: ElementRef;

  // Metodos para pasar de input con click
  pasarSengundo(event){
    // const element = this.renderer.selectRootElement('input2');
    // this.renderer.addClass(this.input2.nativeElement.focus()); 
    this.input2.nativeElement.focus();
    // this.renderer.addClass(this.input2.nativeElement, "");
    // setTimeout(() => element.focus, 0);
    // setTimeout(() => element.focus(), 0);
  }

  pasarTercero(event){
    // const element = this.renderer.selectRootElement('#input3');
    this.input3.nativeElement.focus();
    // setTimeout(() => element.focus, 0);
    // setTimeout(() => element.focus(), 0);
  }

  validar(event){
    if (this.profileForm.value.firstName == "") {
        this.input1.nativeElement.style.backgroundColor = "yellow";
        this.input1.nativeElement.focus();
    }
    if (this.profileForm.value.lastName == "") {
        this.input2.nativeElement.style.backgroundColor = "yellow"; 
        this.input2.nativeElement.focus();
    }
    if (this.profileForm.value.secondName == "") {
        this.input3.nativeElement.style.backgroundColor = "yellow";
        this.input3.nativeElement.focus();
    }else if(this.profileForm.value.firstName != "" && this.profileForm.value.lastName != "" && this.profileForm.value.secondName != ""){
        // alert(this.profileForm.value);
        alert(JSON.stringify(this.profileForm.value, null, 4));
    }

  }

  onSubmit(){
    console.warn(this.profileForm.value); // Metodo para recibir lo enviado por el form
  }

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

}
