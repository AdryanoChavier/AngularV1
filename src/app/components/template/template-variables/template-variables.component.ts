import { Component,AfterViewInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit{
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public h2Text!: ElementRef;

    ngAfterViewInit(){
      console.log(this.nameInput.nativeElement.value);
      console.log(this.h2Text.nativeElement.innerText);
    }
}
