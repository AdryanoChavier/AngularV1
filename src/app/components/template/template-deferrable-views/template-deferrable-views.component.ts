import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewComponentComponent } from '../../new-component/new-component.component';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [CommonModule,NewComponentComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {
public isTrue = false;

public Data: Observable<string[]> = of([
  ' item 1 ',
  ' item 2 ',
  ' item 3 ',
]).pipe(delay(3000));
}
