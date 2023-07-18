import { useState } from 'react'
import { useIsFetching } from '../hooks/useIsFetching'
import { useErrorMessage } from '../hooks/useErrorMessage'
import { postalCode } from '../types'
import { useRedirect } from '../hooks/useRedirect'
import { createClientService } from '../services/clients.services'

const ClientCreateForm = () => {
  const { redirect } = useRedirect()
  const [type, setType] = useState('client')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone1, setPhone1] = useState<number | undefined>(undefined)
  const [phone2, setPhone2] = useState<number | undefined>(undefined)
  const [dni, setDni] = useState('')
  const [address, setAddress] = useState('')
  const [location, setLocation] = useState('')
  const [postalCode, setPostalCode] = useState<postalCode | null>(null)
  const { isFetching, setIsFetching } = useIsFetching()
  const { errorMessage, setErrorMessage } = useErrorMessage()

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value
    switch (e.target.name) {
      case 'type':
        setType(value as 'client' | 'supplier')
        break
      case 'name':
        setName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'phone1':
        setPhone1(value ? Number(value) : undefined)
        break
      case 'phone2':
        setPhone2(value ? Number(value) : undefined)
        break
      case 'dni':
        setDni(value)
        break
      case 'address':
        setAddress(value)
        break
      case 'location':
        setLocation(value)
        break
      case 'postalCode':
        setPostalCode(value as postalCode)
        break
      default:
        break
    }
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const newClient = {
      type,
      name,
      lastName,
      email,
      phone1,
      phone2,
      dni,
      address,
      location,
      postalCode,
    }

    try {
      setIsFetching(true)

      await createClientService(newClient)

      setIsFetching(false)
      redirect('/')
    } catch (error) {
      setIsFetching(false)

      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage)
      }
    }
  }

  return (
    <section>
      <form>
        <label htmlFor='type'>Clase: </label>
        <select onChange={handleInput} name='type' id='type'>
          <option value='client'>Cliente</option>
          <option value='supplier'>Proveedor</option>
        </select>
        <br />
        <label htmlFor='name'>Nombre: </label>
        <input value={name} onChange={handleInput} type='text' name='name' />
        <br />
        <label htmlFor='lastName'>Apellidos: </label>
        <input
          value={lastName}
          onChange={handleInput}
          type='text'
          name='lastName'
        />
        <br />
        <label htmlFor='email'>Correo Electrónico: </label>
        <input value={email} onChange={handleInput} type='email' name='email' />
        <br />
        <label htmlFor='phone1'>Teléfono de contacto: </label>
        <input value={phone1} onChange={handleInput} type='tel' name='phone1' />
        <br />
        <label htmlFor='phone2'>Segundo teléfono de contacto: </label>
        <input value={phone2} onChange={handleInput} type='tel' name='phone2' />
        <br />
        <label htmlFor='dni'>DNI: </label>
        <input value={dni} onChange={handleInput} type='text' name='dni' />
        <br />
        <label htmlFor='address'>Dirección: </label>
        <input
          onChange={handleInput}
          type='text'
          name='address'
          autoComplete='address'
          value={address}
        />
        <br />
        <label htmlFor='location'>Localidad: </label>
        <input
          onChange={handleInput}
          type='text'
          name='location'
          autoComplete='location'
          value={location}
        />
        <br />
        <label htmlFor='postalCode'>Código Postal: </label>
        <input
          value={postalCode}
          onChange={handleInput}
          type='number'
          name='postalCode'
        />
        <br />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button onClick={handleSubmit} disabled={isFetching}>
          Añadir Cliente
        </button>
      </form>
    </section>
  )
}

export default ClientCreateForm
