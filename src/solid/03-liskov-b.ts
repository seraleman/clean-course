export abstract class Vehicle {
  // *Comentado para ejemplo
  //   getNumberOfSEats(): number {
  //     throw Error('Method not implemented')
  //   }

  abstract getNumberOfSeats(): number
}

export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super()
  }
  getNumberOfSeats() {
    return this.numberOfSeats
  }
}

export class Audi extends Vehicle {
  constructor(private numberOfSeats: number) {
    super()
  }
  getNumberOfSeats(): number {
    throw new Error('Method not implemented.')
  }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super()
  }
  getNumberOfSeats(): number {
    throw new Error('Method not implemented.')
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super()
  }
  getNumberOfSeats(): number {
    throw new Error('Method not implemented.')
  }
}
