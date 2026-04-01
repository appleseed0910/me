import './styles/base.css';
import './styles/border.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';

// Content part
import About from './components/Content/About/About';
import Projects from './components/Content/Projects/Projects';
import Experience from './components/Content/Experience/Experience';
import Education from './components/Content/Education/Education';

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<About />} />
                  <Route path='projects' element={<Projects />} />
                  <Route path='experience' element={<Experience />} />
                  <Route path='education' element={<Education />} />
              </Route>
          </Routes>
      </BrowserRouter>
    )
}

export default App;
