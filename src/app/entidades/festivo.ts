import { Tipo } from './tipo';
export class Festivo {
  public id: number;
  public nombre: string;
  public dia: number;
  public mes: number;
  public diasPascua;
  public tipo: Tipo;
  constructor(
    id: number,
    nombre: string,
    dia: number,
    mes: number,
    diasPascua: number,
    tipo: Tipo
  ) {
    this.id = id;
    this.nombre = nombre;
    this.dia = dia;
    this.mes = mes;
    this.diasPascua = diasPascua;
    this.tipo = tipo;
  }
}
