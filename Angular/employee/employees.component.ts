import { Component } from '@angular/core';
import { EMPLOYEES } from '../employee-mock';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})

export class EmployeesComponent{
       employees = EMPLOYEES
        
}