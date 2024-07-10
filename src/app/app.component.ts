import { SignalsComponent } from './components/signals/signals/signals.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SignalsComponent,TemplateDeferrableViewsComponent,TemplateControlFlowComponent,TemplateVariablesComponent,TemplateBindingComponent, NewComponentComponent,CommonModule,RouterOutlet],
  template: ` <!-- <router-outlet />-->
  <!--<app-new-component/>-->
   <!-- <app-template-binding/> -->
   <!-- <app-template-variables/> -->
   <!-- <app-template-control-flow/> -->
   <!-- <app-template-deferrable-views/> -->
  <h1>Curso de Angular</h1>
  <app-signals/>
 `,
})
export class AppComponent {
  title = 'AngularV1';
}
