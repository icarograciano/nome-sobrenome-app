import { Component } from '@angular/core';

@Component({
  selector: 'app-nome-lista',
  templateUrl: './nome-lista.component.html',
  styleUrls: ['./nome-lista.component.css']
})
export class NomeListaComponent {
  nomes = [
    { nome: 'João', sobrenome: 'Silva' },
    { nome: 'Maria', sobrenome: 'Souza' },
    { nome: 'Pedro', sobrenome: 'Santos' },
    { nome: 'Icaro', sobrenome: 'Graciano' },
    { nome: 'Monique', sobrenome: 'França' },
    { nome: 'Theo', sobrenome: 'Mendes' },
    { nome: 'Maya', sobrenome: 'Avila' }
  ];

  sobrenomeSelecionado: string = '';

  exibirSobrenome(sobrenome: string) {
    this.sobrenomeSelecionado = sobrenome;
  }
}

