import { BrowserRouter } from "react-router-dom"
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'
import PageRouter from "./PageRouter.tsx"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <PageRouter />
    </BrowserRouter>
  )
}

export default App
