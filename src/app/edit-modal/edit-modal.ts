import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './edit-modal.html',
  styleUrl: './edit-modal.css'
})

export class EditModal implements OnInit {
  @Input() cliente: any;
  @Output() salvar = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<void>();

  clienteEditado: any = {};

  ngOnInit() {
  this.clienteEditado = { ...this.cliente};
  }

  onSalvar() {
    this.salvar.emit(this.clienteEditado);
  }

  onCancelar() { 
    this.cancelar.emit();
  }
}

