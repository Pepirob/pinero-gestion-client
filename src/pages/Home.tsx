import Board from '../components/Board'
import { board } from '../components/BoardItem.css'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className={board}>
        <Board />
      </main>
    </>
  )
}

export default Home
