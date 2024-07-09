import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateVariablesComponent,TemplateBindingComponent, NewComponentComponent,CommonModule,RouterOutlet],
  template: ` <!-- <router-outlet />-->
  <!--<app-new-component/>-->
   <!-- <app-template-binding/> -->
  <h1>Curso de Angular</h1>
  <app-template-variables/>
 `,
})
export class AppComponent {
  title = 'AngularV1';
}
