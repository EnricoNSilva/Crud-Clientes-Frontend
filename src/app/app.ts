import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditModal } from './edit-modal/edit-modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    EditModal
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent implements OnInit {
  protected readonly title = signal('CRUD-Clientes');
  http = inject(HttpClient);
  apiUrl = 'https://crud-clientes-api.vercel.app/clientes';
  clienteSendoEditado : any = null;

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
        console.error('Erro ao cadastrar cliente:', erro);
      }
    );
  }

  selecionarClienteParaEditar(cliente: any) {
    this.clienteSendoEditado = cliente;
  }

  onSalvarEdicao(clienteEditado: any) {
    const id = clienteEditado._id;

    // http.put() para enviar os dados editados
    this.http.put(`${this.apiUrl}/${id}`, clienteEditado).subscribe(
      (resposta) => {
        console.log('Cliente alterado!', resposta);

        // Fecha o modal (setando a "gaveta" como nula)
        this.clienteSendoEditado = null;

        // Atualiza a lista na tela
        this.listarClientes();
      },
      (erro) => {
        console.error('Erro ao alterar cliente:', erro);
      }
    );
  }

  onCancelarEdicao() {
    // Apenas fecha o modal (setando a "gaveta" como nula)
    this.clienteSendoEditado = null;
  }

  excluirCliente(idCliente: string, nomeCliente: string) {
  
    // Pop up de confirmação
  const confirmacao = confirm(`Tem certeza que deseja excluir o cliente "${nomeCliente}"?`);

  if (confirmacao) {
    
      this.http.delete(`${this.apiUrl}/${idCliente}`).subscribe(
        (resposta) => {
          console.log('Cliente excluído!', resposta);
          // Atualiza a lista na tela
          this.listarClientes();
        },
        (erro) => {
          console.error('Erro ao excluir cliente:', erro);
        }
      );
    }
    // Fecha o "if" de confirmação
  }
}
