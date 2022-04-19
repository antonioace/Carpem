import React, { useState } from 'react'
import FormContainer from './FormContainer'
import {Form,Button} from 'react-bootstrap'
function RegistroTaller() {
    const [nombre,setNombre]=useStateate('')
    const [latitud,setLatitud]=useState('')
    const [longitud,setLongtiud]=useState('')
    const [direccion,setDireccion]=useState('')
    const [telefono,setTelefono]=useState('')
    const [email,setEmail]=useState('')
    const [pagina,setPagina]=useState('')
  return (
    <FormContainer>
            <h1 className="text-center text-success">Registro Taller</h1>

            <Form>
            <Form.Group className="py-2"controlId="formBasicEmail">
                <Form.Label>Nombre </Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Latitud </Form.Label>
                <Form.Control type="number" placeholder="Enter email" />
            </Form.Group>

           

            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Longitud </Form.Label>
                <Form.Control type="number" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Direccion </Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Telefono </Form.Label>
                <Form.Control type="number" placeholder="Enter email" />
            </Form.Group>


            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
                
            <Form.Group className="py-2" controlId="formBasicEmail">
                <Form.Label>Pagina Web </Form.Label>
                <Form.Control type="url" placeholder="Enter email" />
            </Form.Group>
        <Button type="submit" variant="success" className="mt-3">
          Registrar
        </Button>

        </Form>
        </FormContainer>
  )
}

export default RegistroTaller