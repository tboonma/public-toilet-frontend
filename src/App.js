import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Index from "./pages/index.js"
import Banner from "./components/Banner"

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="*" element={<Index />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
