interface Bird {
  eat(): void
}

interface FlyingBird {
  fly(): number
}

interface RunnigBird {
  run(): void
}

interface SwimmerBird {
  swim(): void
}

class Tucan implements Bird, FlyingBird {
  public eat() {}
  public fly() {
    return 100
  }
}

class Humminbird implements Bird, FlyingBird {
  public eat() {}
  public fly() {
    return 200
  }
}

class Ostrich implements Bird, RunnigBird {
  public eat() {}
  public run() {}
}

class Penguin implements Bird, SwimmerBird {
  public eat() {}
  public swim() {}
}
