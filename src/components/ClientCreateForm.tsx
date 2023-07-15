const ClientCreateForm = () => {
  return (
    <section>
      <form>
        <label htmlFor='type'>Clase: </label>
        <select name='type' id='type'>
          <option value='client'>Cliente</option>
          <option value='supplier'>Proveedor</option>
        </select>
        <br />
        <label htmlFor='name'>Nombre: </label>
        <input type='text' />
        <br />
        <label htmlFor='lastName'>Apellidos: </label>
        <input type='text' name='lastName' />
        <br />
        <label htmlFor='email'>Correo Electrónico: </label>
        <input type='email' name='email' />
        <br />
        <label htmlFor='phone1'>Teléfono de contacto: </label>
        <input type='tel' name='phone1' />
        <br />
        <label htmlFor='phone2'>Segundo teléfono de contacto: </label>
        <input type='tel' name='phone2' />
        <br />
        <label htmlFor='dni'>DNI: </label>
        <input type='text' name='dni' />
        <br />
        <label htmlFor='address'>Dirección: </label>
        <input type='text' name='address' autoComplete='address' />
        <br />
        <label htmlFor='location'>Localidad: </label>
        <input type='text' name='location' autoComplete='location' />
        <br />
        <label htmlFor='postalCode'>Código Postal: </label>
        <input type='number' name='postalCode' />
        <br />
        <button>Añadir Cliente</button>
      </form>
    </section>
  )
}

export default ClientCreateForm
