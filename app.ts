
import { Component, ElementRef, HostBinding, HostListener, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Form } from "./form/form";
import { CommonModule } from '@angular/common';
import { Signal } from '@angular/core';
import { AppModule } from './app-routing-module';
import { AppRoutingRoutingModule } from "./app-routing-routing-module";
@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, AppModule, AppRoutingRoutingModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /*imgsrc='abc.jpg';
  keyPressed(e:any){
    console.log(e.target.value);
  }
  //staticInput: string="Static two way binding";
  //dynamicInput: string=' ';
  //num=100;
  full = [{
   id:1, 
    name:'angular'
  },
  {
   id:2 , 
    name:'node js'
  }];
 update='update';
 hasText: boolean=false;
 textInput(e:any){
  this.hasText=e.target.value !==" ";
 }

 colorMode= 'light';
 toggleMode(){
  if(this.colorMode==='light'){
    this.colorMode='dark';
  }else{
    this.colorMode='light';
  }
 }

nm: string=' ';
em: string=' ';
isValid: boolean =false;
formsubmit:boolean=false;
checkEmailValidation(em : string): void{
  if(em.includes('@') && em.includes('.com')){
    this.isValid = true;
  }else{
    this.isValid = false;
  }
 }
 msg(){
  if(this.nm && this.isValid){
    this.formsubmit = true;
  }else{
    this.formsubmit = false;
  }
 }

 @ViewChild('colorInput') colorInput!: ElementRef;
 @HostBinding('style.background-color') selectedColor!: string;
 @HostListener('input', ['$event.target.value']) onColorChange(color: string){
  this.selectedColor= color;
 }*/
}

