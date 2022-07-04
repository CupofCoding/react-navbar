import Navbar from "./components/Navbar";
import Home from './pages/Home'
import Spring from "./pages/Spring";
import Summer from "./pages/Summer";
import Autumn from "./pages/Autumn";
import Winter from "./pages/Winter";

function App() {
  let component
  // eslint-disable-next-line default-case
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/spring":
      component = <Spring />
      break
    case "/summer":
      component = <Summer />
      break
    case "/autumn":
      component = <Autumn />
      break
    case "/winter":
      component = <Winter />
      break        
  }
  return (
  <>
    <Navbar />
    <div className="container">{ component }</div>
  </>
  )
}


export default App;