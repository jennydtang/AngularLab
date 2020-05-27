export class Person {
  private FirstName: string;
  private LastName: string;
  private Age: number;
  private HasPets: boolean;

  //constructor
  constructor(
    firstname: string,
    lastname: string,
    age: number,
    hasPets: boolean
  ) {
    this.FirstName = firstname;
    this.LastName = lastname;
    this.Age = age;
    this.HasPets = hasPets;
  }

  //getters and setters
  getFirstName(): string {
    return this.FirstName;
  }
  setFirstName(firstname: string): void {
    this.FirstName = firstname;
  }

  //Last Name
  getLastName(): string {
    return this.LastName;
  }
  setLastName(lastname: string): void {
    this.LastName = lastname;
  }

  //age
  getAge(): number {
    return this.Age;
  }
  setAge(age: number): void {
    this.Age = age;
  }

  //Has Pets
  getHasPets(): boolean {
    return this.HasPets;
  }
  setHasPets(hasPets: boolean): void {
    this.HasPets = hasPets;
  }
}
