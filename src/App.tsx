import './styles/base.css';
import './styles/border.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';

// Content part
import About from './components/Content/About/About';
import Projects from './components/Content/Projects/Projects';
import Experience from './components/Content/Experience/Experience';
import Skills from './components/Content/Skills/Skills';

function App() {
    return (
      <BrowserRouter basename='/me/'>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<About />} />
                  <Route path='skills' element={<Skills />} />
                  <Route path='projects' element={<Projects />} />
                  <Route path='experience' element={<Experience />} />
              </Route>
          </Routes>
      </BrowserRouter>
    )
}

export default App;
