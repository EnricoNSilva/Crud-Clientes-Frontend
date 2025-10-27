import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent implements OnInit {
  protected readonly title = signal('CRUD-Clientes');
  http = inject(HttpClient);
  apiUrl = 'http://localhost:3000/clientes';

  Clientes: any[] = []; // Array vazio para armazenar os clientes

  ngOnInit() {
    this.listarClientes();
  }


  listarClientes() {
    this.http.get(this.apiUrl).subscribe(
      (data: any) => {
        console.log('Clientes:', data);

        this.Clientes = data;
      },
      (error) => {
        console.error('Erro ao listar clientes:', error);
      }
    );
  }

  novoCliente = {
    nome: '',
    email: '',
    telefone: '',
  };

  cadastrarCliente() {

  this.http.post(this.apiUrl, this.novoCliente).subscribe(
    (resposta) => {
      console.log('Cliente cadastrado!', resposta);

      this.novoCliente = { nome: '', email: '', telefone: '' };

      // Atualiza a lista de clientes na tela
      this.listarClientes(); 
    },
    (erro) => {
      // Erro!
      console.error('Erro ao cadastrar cliente:', erro);
    }
  );
}

}
