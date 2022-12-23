import { useState } from 'react'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import useCategorias from '../hooks/useCategorias'

export default function Formulario() {

  const { categorias } = useCategorias()
  const {consultarBebida} = useBebidas()
  const [alerat, setAlerat] = useState('')
  const [busqueda, setBusqueda] = useState({
    categoria: '',
    nombre: ''
  })
  const handleBusqueda = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    if(Object.values(busqueda).includes('')){
      setAlerat('Todos los campos son obligatorios')
      return 
    }
    setAlerat('')
    consultarBebida(busqueda)
  }
  return (
    <div>
      {alerat && <Alert
        variant='danger'
        className='text-center'
      >{alerat}</Alert> }
      <Form
        onSubmit={handleSubmit}
      >
        <Row>
          <Col md={6}>
            <Form.Group className='mb-3'>
              <Form.Label
                htmlFor='nombre'
              >Nombre de la bebida</Form.Label>
              <Form.Control type='text'
                placeholder='Ej: Tequila, Vodka, etc'
                id='nombre'
                value={busqueda.nombre}
                name= 'nombre'
                onChange={handleBusqueda}
              ></Form.Control>
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group className='mb-3'>
              <Form.Label
                htmlFor='categoria'

              >Nombre de la bebida</Form.Label>
              <Form.Select type='text'
                placeholder='Ej: Tequila, Vodka, etc'
                name='categoria'
                value={busqueda.categoria}
                onChange={handleBusqueda}
                id='categoria'
              >
                <option> -- Seleccione Categoría</option>
                {categorias.map(categoria => (
                  <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row className='justify-content-end'>
          <Col md={3}>
            <Button
              variant='danger'
              type={'submit'}
              className='text-uppercase w-100'
            > Buscar Bebidas</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
