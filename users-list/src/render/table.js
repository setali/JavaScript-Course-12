import renderTableHead from './tableHead'
import User from '../entity/user'

export default function renderTable (data) {
  const table = document.createElement('table')
  table.setAttribute('border', 1)
  table.appendChild(renderTableHead())

  data.forEach(el => {
    const user = new User(el)
    table.appendChild(user.render())
  })

  return table
}
