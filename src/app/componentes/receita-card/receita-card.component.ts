import { Component, input } from '@angular/core';
import { Receita } from './receita';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receita-card',
  imports: [CommonModule],
  templateUrl: './receita-card.component.html',
  styleUrl: './receita-card.component.css'
})
export class ReceitaCardComponent {
  receita = input.required<Receita>();

  alternarFavorito() {
    this.receita().favorito = !this.receita().favorito;
  }
}
