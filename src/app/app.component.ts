import { Component } from '@angular/core';
import { ListaReceitasComponent } from './componentes/lista-receitas/lista-receitas.component';

@Component({
  selector: 'app-root',
  imports: [
    ListaReceitasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'receitas-app';
}
