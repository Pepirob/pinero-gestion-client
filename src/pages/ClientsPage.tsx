import ClientCreateForm from '../components/ClientCreateForm'
import NavBar from '../components/NavBar'

const ClientsPage = () => {
  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
        <h1>Clientes</h1>
      </header>

      <main>
        <ClientCreateForm />
      </main>
    </>
  )
}

export default ClientsPage
