import './styles/base.css'
import './styles/border.css'

import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Content from './components/Content/Content'

function App() {

  return (
    <>
      <div className="page">
        <div className="top-container">
          <Sidebar />
          <div className="body-container">
            <Header />
            <Content />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
