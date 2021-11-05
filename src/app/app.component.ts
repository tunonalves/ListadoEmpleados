import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado Empleados';

  empleados:Empleado[]=[
    new Empleado("Federico","Tuñon Alves",130000,"Director"),
    new Empleado("Ayelen","Manzi",145000,"Gerente"),
    new Empleado("Pablo","Marciano",125000,"Socio"),
    new Empleado("Ruben","Bogey",80000,"Empleado"),
  ];

  cuadroname:string="";
  cuadrolastname:string="";
  cuadrosalary:number=0;
  cuadrojob:string="";

  addempleado(){
    let miempleado = new Empleado(this.cuadroname,this.cuadrolastname,this.cuadrosalary,this.cuadrojob);
    this.empleados.push(miempleado);
  }
}
