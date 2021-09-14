import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import moment from 'moment';

import { api } from '../../services/api';
import './style.css';

interface IUserDTO {
  id: string;
  name: string;
  email: string;
  senha: string;
  created_at: Date;
  updated_at: Date;
}

function Users() {

  const [users, setUsers] = useState<IUserDTO[]>([]);
  const history = useHistory()

  useEffect(() => {
    loadUsers()
  }, [])

  async function loadUsers() {
    const response = await api.get('/user');
    console.log(response);
    setUsers(response.data)
  }

  function formateDate(date: Date) {
    return moment(date).format("DD/MM/YYYY");
  }

  function newUser() {
    history.push('/users_registration')
  }

  function updateUser(id: string) {
    history.push(`/users_registration/${id}`)
  }

  return (
    <div className="container">
      <br />
      <div className="task-header">
        <h1>Usuários</h1>
        <Button variant="dark" size="sm" onClick={newUser}>Novo Usuário</Button>
      </div>
      <br />
      <Table striped bordered hover className='text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Data Alteração</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{formateDate(user.updated_at)}</td>
                <td>
                  <Button size="sm" onClick={() => updateUser(user.id)}>Editar</Button>&nbsp;&nbsp;&nbsp;
                  <Button size="sm" variant="danger ">Remover</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export {
  Users
}
