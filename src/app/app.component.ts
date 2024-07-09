import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateBindingComponent, NewComponentComponent,CommonModule,RouterOutlet],
  template: ` <!-- <router-outlet />-->
  <!--<app-new-component/>-->
  <h1>Curso de Angular</h1>
  <app-template-binding/>
 `,
})
export class AppComponent {
  title = 'AngularV1';
}
