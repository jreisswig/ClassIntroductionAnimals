export default class Animal {
  constructor({ name = 'Animal', age } = {}) {
    this.name = name
    this.age = age
    this.speak()
    this.render()
  }

  speak() {
    console.log(this.name + ' speaks.')
  }

  render() {
    const el = document.createElement('div')
    el.classList.add('animal')
    el.style.background = `hsl(${Math.round(Math.random() * 360)}, 70%, 70%)`
    const left = Math.random() * window.innerWidth
    el.style.left = `${left}px`
    document.body.appendChild(el)
  }
}
