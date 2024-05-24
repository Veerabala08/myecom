import './App.css'
import Products from "./Components/Home";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
// import Chat from "./Components/Chat"

export default function App() {
  return (
    <div className="">
      <Navbar />
    <Products />
    
    {/* <Chat /> */}
    <Footer />
    </div>
  )
}