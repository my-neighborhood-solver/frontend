import { BrowserRouter } from "react-router-dom"
import Header from './Header/Header.tsx'
import Footer from './Footer/Footer.tsx'
import PageNavigator from "./PageRouter.tsx"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <PageNavigator />
    </BrowserRouter>
  )
}

export default App
