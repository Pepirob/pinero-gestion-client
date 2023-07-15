import { BoardItemProps } from '../types'
import { boardLi } from './BoardItem.css'

const BoardItem = ({ src, title }: BoardItemProps) => {
  return (
    <li className={boardLi}>
      <img src={src} alt={title} width={60} />
      <p>{title}</p>
    </li>
  )
}

export default BoardItem
