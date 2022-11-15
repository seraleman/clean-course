class Product {
  constructor(public name: string) {}
  toString() {
    return `${this.name}`
  }
}

;(() => {
  const bluePants = new Product('Blue large pants')
  console.log(bluePants.toString())
})()
