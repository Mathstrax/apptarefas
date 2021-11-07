import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {
  
  nome:string = "Matheus"; 

  familia: Array<string> = [
    "Matheus",
    "Jucelino",
    "Claudia",
    "Lucas",
    "Leticia"

  ];

  lista: Array<string> = [
    "tarefa 1",
    "tarefa 2",
    "tarefa 3"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
