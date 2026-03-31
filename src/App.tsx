import './styles/base.css';
import './styles/border.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Content from './components/Content/Content';
import Content2 from './components/Content/Content2';

function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Content />} />
                  <Route path='content2' element={<Content2 />} />
              </Route>
          </Routes>
      </BrowserRouter>
    )
}

export default App;
