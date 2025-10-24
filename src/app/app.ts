import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class AppComponent implements OnInit {
  protected readonly title = signal('CRUD-Clientes');
  http = inject(HttpClient);
  apiUrl = 'http://localhost:3000/clientes';

  ngOnInit() {
    this.listarClientes();
  }


  listarClientes() {
    this.http.get(this.apiUrl).subscribe(
      (data) => {
        console.log('Clientes:', data);
      },
      (error) => {
        console.error('Erro ao listar clientes:', error);
      }
    );
  }
}
