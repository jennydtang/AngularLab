import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent implements OnInit {
  PersonsList: any[];
  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    // this.serviceService.getPersons().subscribe(
    //   (listOfPersons) =>
    //     (this.PersonsList = listOfPersons.map((Person) => {
    //       return Person.getPersons;
    //     }))
    // );
  }

  //dependency injecting; inject service into the constructor
  get dataList(): Person[] {
    return this.serviceService.getPersons(); //now have access to getter
  }
}
