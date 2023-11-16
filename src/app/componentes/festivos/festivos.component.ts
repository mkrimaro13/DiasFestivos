import { Component, OnInit } from '@angular/core';
import { Festivo } from 'src/app/entidades/festivo';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { FestivosService } from 'src/app/servicios/festivos.service';
import { MatDialog } from '@angular/material/dialog';
import { FestivosConsultarComponent } from '../festivos-consultar/festivos-consultar.component';
import { FestivoDto } from 'src/app/entidades/festivodto';

@Component({
  selector: 'app-festivos',
  templateUrl: './festivos.component.html',
  styleUrls: ['./festivos.component.css'],
})
export class FestivosComponent implements OnInit {
  public year: number = 0;
  public selectedDate: Date = new Date;
  public festivos: FestivoDto[] = [];
  public columnas = [
    { name: 'Festivo', prop: 'festivo' },
    { name: 'Fecha', prop: 'fecha' },
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  public festivoSeleccionado: Festivo | undefined;

  constructor(
    private festivoService: FestivosService,
    public dialogService: MatDialog
  ) {}

  ngOnInit(): void {
    this.listar;
  }

  public listar() {
    this.festivoService.listar(this.year).subscribe((respuesta) => {
      this.festivos = respuesta;
    });
  }

  public verificar() {

    const dialogRef = this.dialogService.open(FestivosConsultarComponent, {
      width: '300px',
      height: '300px',
      data: {
        encabezado: 'Verificar fecha festiva:',
        selectedDate: this.selectedDate,
      },
    });
    dialogRef.afterClosed().subscribe((datos) => {
      if (datos) {
        this.festivoService
          .verificar(datos.selectedDate.getDate(), datos.selectedDate.getMonth(), datos.selectedDate.getFullYear())
          .subscribe(respuesta => {
            alert(respuesta)
          });
      }
    });
  }

  public onActivate(event: any) {}
}
