import { Component, input } from '@angular/core';
import { CategoriaReceita } from '../receita-card/receita';
import { ReceitaCardComponent } from '../receita-card/receita-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria-receita',
  imports: [
    ReceitaCardComponent,
    CommonModule
  ],
  templateUrl: './categoria-receita.component.html',
  styleUrl: './categoria-receita.component.css'
})
export class CategoriaReceitaComponent {
  categoria = input.required<CategoriaReceita>();
}
