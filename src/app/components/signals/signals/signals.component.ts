import { CommonModule } from '@angular/common';
import { Component,computed,signal,effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

public FirstName = signal('Adryano ');
public lastName = signal('Chavier');

public fullName = computed(()=>{
  return this.FirstName() + this.lastName()
})

public array = signal([1]);

/*
  effect - raramente são necessários na maioria dos codigos,
  mas podem ser úteis em circunstancias especificas.

  - Registro de dados sendo exibidos e quando eles mudam,
  seja para análise ou como ferramenta de depuração

  - Manter os daddos sincronizados com o windows.localStorage.

  - Adicionando comportamento DOM personalizado que não pode ser expresso
  com sintaxe de modelo

  - Executar renderização personalizada em um <canvas>, biblioteca de gráficos
  ou outra biblioteca de UI de terceiros.
*/
constructor(){
  effect(()=>{
    console.log(this.FirstName())
    console.log(this.array())
  })
}


public updateName(){
return this.FirstName.set("João ")
}

public updateArray(){
  this.array.update((oldValue: Array<number>)=>{
    return [...oldValue, oldValue.length+1]
  })
}

}
