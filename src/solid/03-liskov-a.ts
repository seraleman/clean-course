import { Tesla, Audi, Toyota, Honda, Vehicle } from './03-liskov-b'
;(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    // *Comentado para ejemplo
    /* for (const car of cars) {
      if (car instanceof Tesla) {
        console.log('Tesla', car.getNumberOfSEats())
        continue
      }
      if (car instanceof Audi) {
        console.log('Audi', car.getNumberOfSEats())
        continue
      }
      if (car instanceof Toyota) {
        console.log('Toyota', car.getNumberOfSEats())
        continue
      }
      if (car instanceof Honda) {
        console.log('Honda', car.getNumberOfSEats())
        continue
      }
    } */
    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats())
    })
  }

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)]

  printCarSeats(cars)
})()
