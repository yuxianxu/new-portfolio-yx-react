import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import Experience from './pages/Experience.js'
import Header from './components/Header.js'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/experience' element={<Experience />} />
         <Route path='/projects' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
