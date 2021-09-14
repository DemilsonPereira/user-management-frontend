import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';
import { api } from '../../../services/api';

import './style.css';

interface IUserDTO {
  name: string;
  email: string;
  senha: string;
}

interface IParams {
  id: string;
}

const Users: React.FC = () => {

  const history = useHistory()
  const { id } = useParams<IParams>()
  const [model, setModel] = useState<IUserDTO>({
    name: '',
    email: '',
    senha: ''
  })

  useEffect(() => {
    if (id !== undefined) {
      findUser(id)
    }
  }, [id])

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setModel({
      ...model,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    const response = await api.post('/user', model)

    console.log(response)
  }

  async function findUser(id: string) {
    const response = await api.get(`/user/${id}`)
    console.log(response)
  }

  function back() {
    history.goBack()
  }

  return (
    <div className="container">
      <br />
      <div className="task-header">
        <h1>Novo Usuário</h1>
        <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
      </div>
      <div className="container">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" name="name" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} placeholder="Password" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Salvar
          </Button>
        </Form>
      </div>
      <br />
    </div>
  )
}

export default Users;
