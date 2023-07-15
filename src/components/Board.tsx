import BoardItem from './BoardItem'
import { boardUl } from './BoardItem.css'
import NavItem from './NavItem'

const ITEMS = [
  { src: '../../public/clientes.png', title: 'Clientes' },
  { src: '../../public/productos.svg', title: 'Productos' },
  { src: '../../public/document.png', title: 'Facturas' },
  { src: '../../public/descarga.png', title: 'Albaranes' },
]

const Board = () => {
  const clientes = '/clientes'
  return (
    <>
      <ul className={boardUl}>
        {ITEMS.map((item) => {
          return (
            <NavItem key={item.src} path={clientes}>
              <BoardItem src={item.src} title={item.title} />
            </NavItem>
          )
        })}
      </ul>
    </>
  )
}

export default Board
