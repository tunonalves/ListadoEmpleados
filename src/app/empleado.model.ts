export class Empleado{

	constructor(Name:string,LastName:string,Salary:number,Job:string){
		this.name = Name;
		this.lastname = LastName;
		this.salary = Salary;
		this.job = Job;
	}

	name: string="";
	lastname: string="";
	salary: number=0;
	job: string="";
}