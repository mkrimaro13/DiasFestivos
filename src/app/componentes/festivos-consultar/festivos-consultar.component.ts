import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface fechaConsulta {
  encabezado: string;
  day: number;
  month: number;
  year: number;
  selectedDate: Date;
}
@Component({
  selector: 'app-festivos-consultar',
  templateUrl: './festivos-consultar.component.html',
  styleUrls: ['./festivos-consultar.component.css'],
})
export class FestivosConsultarComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public datos: fechaConsulta) {}
  ngOnInit(): void {}
}
