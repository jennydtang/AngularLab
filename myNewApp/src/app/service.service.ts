import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
//Reference Person in Service
export class ServiceService {
  private personArr: Person[] = [
    new Person('Jenny', 'Tang', 32, true),
    new Person('Zach', 'Hall', 29, true),
    new Person('Caitlin', 'Friend', 31, false),
  ];
  constructor() {}

  //create method that gets person
  getPersons(): Person[] {
    return this.personArr;
  }

  //Change get Persons to return an observable
  // getPersons(): Observable<Person[]> {
  //   return of(this.personArr);
  //   this.delay(4000);
  // }
  async delay(ms: number) {
    await new Promise((resolve) => setTimeout(() => resolve(), ms));
  }
}
