import Dog from './Dog'

export default class World {
  constructor() {
    this.update()
  }
  update() {
    new Dog()
    setTimeout(() => this.update(), 5000)
  }
}
