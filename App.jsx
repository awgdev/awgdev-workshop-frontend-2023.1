import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Ram from './Components/Ram/Ram'

function App() {
  

  return (
    <Router>


      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Ram/' element={<Ram />} />
      </Routes> 


    </Router>
      
  )
}

export default App
