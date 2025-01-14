import Landing from './pages/landing/Landing'
import Layout from './layouts/Layout';
import './App.css'

import {BrowserRouter as Router,Routes, Route,} from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element = { <Layout><Landing /></Layout> }/>
          <Route path="/register"/>
          <Route path="/login"/>
        </Routes>
      </Router>
    </>
  )
}

export default App
