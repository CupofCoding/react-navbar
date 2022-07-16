import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Winter from "./pages/Winter";
import { Route, Routes } from 'react-router-dom';
//these two components allow us to define all of our routes and group them together

function App() {
  // let component
  // // eslint-disable-next-line default-case
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Home />
  //     break
  //   case "/spring":
  //     component = <Spring />
  //     break
  //   case "/summer":
  //     component = <Summer />
  //     break
  //   case "/autumn":
  //     component = <Autumn />
  //     break
  //   case "/winter":
  //     component = <Winter />
  //     break        
  // }
  return (
  <>
    <Navbar />
    <div className="container">
      {/* { component } -- used with switch statement */}
      {/* Routes provides a list of different routes, function chooses the one that fits best and define each one as a component */}
      <Routes>
        {/* Each route component contains a path and element that selects what it's rendering out. It functions the same as the switch statement with some additional functions*/}
        <Route path="/" element={<Home/>} />
        <Route path="/spring" element={<Spring />} />
        <Route path="/summer" element={<Summer/>} />
        <Route path="/autumn" element={<Autumn/>} />
        <Route path="/winter" element={<Winter/>} />
      </Routes>
    </div>
  </>
  )
}


export default App;