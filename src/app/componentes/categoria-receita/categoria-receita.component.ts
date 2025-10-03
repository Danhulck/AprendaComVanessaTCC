import { Component, input, ViewChild, ElementRef } from '@angular/core';
import { CategoriaReceita } from '../receita-card/receita';
import { ReceitaCardComponent } from '../receita-card/receita-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria-receita',
  imports: [ReceitaCardComponent, CommonModule],
  templateUrl: './categoria-receita.component.html',
  styleUrl: './categoria-receita.component.css'
})
export class CategoriaReceitaComponent {
  categoria = input.required<CategoriaReceita>();

  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
