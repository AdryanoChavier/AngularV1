import { CommonModule } from '@angular/common';
import { Component,AfterViewInit,ViewChild,ElementRef } from '@angular/core';
import { NewComponentComponent } from '../../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [CommonModule,NewComponentComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit{
  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public h2Text!: ElementRef;
  @ViewChild(NewComponentComponent) public childComponent!: NewComponentComponent;
  
    ngAfterViewInit(){
      console.log(this.nameInput.nativeElement.value);
      console.log(this.h2Text.nativeElement.innerText);
      console.log(this.childComponent.name)
    }
}
