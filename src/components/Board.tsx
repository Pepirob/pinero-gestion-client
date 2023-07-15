import BoardItem from './BoardItem'
import { boardUl } from './BoardItem.css'
import NavItem from './NavItem'

const ITEMS = [
  { src: '../../public/clientes.png', title: 'clientes' },
  { src: '../../public/productos.svg', title: 'productos' },
  { src: '../../public/document.png', title: 'facturas' },
  { src: '../../public/descarga.png', title: 'albaranes' },
]

const Board = () => {
  return (
    <>
      <ul className={boardUl}>
        {ITEMS.map((item) => {
          return (
            <NavItem key={item.src} path={`/${item.title}`}>
              <BoardItem src={item.src} title={item.title} />
            </NavItem>
          )
        })}
      </ul>
    </>
  )
}

export default Board
