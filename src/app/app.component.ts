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
    new Empleado("Federico","Tuñon Alves",130.000,"Director"),
    new Empleado("Ayelen","Manzi",145.000,"Gerente"),
    new Empleado("Pablo","Marciano",125.000,"Socio"),
    new Empleado("Ruben","Bogey",80.000,"Empleado"),
  ];



}
