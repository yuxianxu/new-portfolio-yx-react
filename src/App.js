import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Experience from './pages/Experience.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import './styles/app.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Project from './pages/Project.js';


const theme = createTheme({
  palette: {
    primary: {
      main: '#26c6da'
    },
    secondary: {
      main: '#009688',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
