import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Users } from './pages/Users'
import UsersForm from './pages/Users/Form'

function Routes() {
  return (
   <Switch>
     <Route path="/" exact component={Home} />
     <Route path="/users" exact component={Users} />
     <Route path="/users_registration" exact component={UsersForm} />
     <Route path="/users_registration/:id" exact component={UsersForm} />
   </Switch>
  )
}

export {
  Routes
}
