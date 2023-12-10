import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link,} from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';

function App() {
  return (
  <Router>
    <ul>
      <li><Link to="/">Home</Link>
      </li>
      <li><Link to="empresa">Empresa</Link>
      </li>
      <li><Link to="contato">Contato</Link>
      </li>
    </ul>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/contato" element={<Contato />} />
   <Route path="/empresa" element={<Empresa />} />
    </Routes>
  </Router>
  )
}

export default App;
