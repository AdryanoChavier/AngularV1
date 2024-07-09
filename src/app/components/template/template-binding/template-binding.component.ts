import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
 public name = "Adryano Chavier";
 public age = 31;
 public condition = this.age < 50 ? "Tem mais que 32 anos":"Tem menos que 32 anos";
 public Disable = false;
 public srcValue = 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'
 public isTexDecoration = this.age >= 31 ? 'underline' : 'none';
 public sum(){
    return this.age++;
  }
 public sub(){
    return this.age--;
  }

  public OnKeyDown(event:Event){
    return console.log(event);
  }
  public OnMouseEvent(event: MouseEvent){
    return console.log({
      clietX: event.clientX,
      clietY: event.clientY
    })
  }


}
