import { COLUMNS } from '../tools/constants'

class User {
  constructor ({ id, name, username, email, address }) {
    this.id = id
    this.name = name
    this.username = username
    this.email = email
    this._address = address

    this.remove = this.remove.bind(this)
  }

  get address () {
    return `${this._address.city} ${this._address.street} ${this._address.suite}`
  }

  remove (event) {
    // event.target.parentElement.remove()
    const tr = document.getElementById(`tr-${this.id}`)
    tr.remove()
  }

  render () {
    const tr = document.createElement('tr')

    COLUMNS.forEach(column => {
      const td = document.createElement('td')
      td.textContent = this[column]
      tr.appendChild(td)
    })

    const removeAction = document.createElement('td')
    removeAction.textContent = 'x'
    removeAction.style.color = 'red'
    removeAction.style.padding = '10px'
    removeAction.style.cursor = 'pointer'

    removeAction.addEventListener('click', this.remove)
    // removeAction.addEventListener('click', () => this.remove())

    tr.appendChild(removeAction)
    tr.setAttribute('id', `tr-${this.id}`)

    return tr
  }
}

export default User
