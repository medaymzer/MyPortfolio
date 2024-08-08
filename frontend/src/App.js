import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Contact from'./pages/Contact'
import Projects from './pages/Projects'
import SingleProject from './pages/singleProject'
import Cv from './pages/Cv'
import './app.scss';
import { Route, Routes } from 'react-router-dom'
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="pages">
      <ScrollToTopButton></ScrollToTopButton>
      <Routes>
        <Route
        path="/"
        element={<Home/>}
        />
        <Route
        path="/Contact"
        element={<Contact/>}
        />
        <Route
        path="/Cv"
        element={<Cv/>}
        />
        <Route
        path="/api/projects/*"
        element={<Projects/>}
        />
         <Route
        path="/api/projects/:id"
        element={<SingleProject/>}
        />
      </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
