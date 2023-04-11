import Home from "./pages/Home";
import Movie from "./pages/Movie";

import {BrowserRouter,Route, Routes} from 'react-router-dom'
import NavBar from "./components/NavBar";
import AddMovie from "./pages/AddMovie";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Movie" element={<Movie/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/AddMovie" element={<AddMovie />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
