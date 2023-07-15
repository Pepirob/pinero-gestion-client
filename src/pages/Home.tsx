import Board from '../components/Board'
import { board } from '../components/BoardItem.css'
import Toolbar from '../components/NavBar'

const Home = () => {
  return (
    <>
      <header>
        <Toolbar />
      </header>

      <main className={board}>
        <Board />
      </main>
    </>
  )
}

export default Home
