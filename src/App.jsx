import Landing from './pages/landing/Landing'
import './App.css'

import {BrowserRouter as Router,Routes, Route,} from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = { <Landing/> }/>
          <Route path="/register"/>
          <Route path="/login"/>
        </Routes>
      </Router>
    </>
  )
}

export default App
