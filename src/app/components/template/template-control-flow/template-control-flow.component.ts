import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable,delay,of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [AsyncPipe,CommonModule],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {
public isTrue = true;

public itens = [{name: 'Adryano Chavier'}];

public Data: Observable<string[]> = of([
  ' item 1 ',
  ' item 2 ',
  ' item 3 ',
]).pipe(delay(3000));

public trackByFn(index: number){
  return index;
}

public addNewName(value: string){
  return this.itens.push({name:value})
}

public condicao = 'C';


}
