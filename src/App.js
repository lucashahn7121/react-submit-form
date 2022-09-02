import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import SubmitPage from './components/SubmitPage'
import SuccessPage from './components/SuccessPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={SubmitPage} />
          <Route exact path='/success' component={SuccessPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
