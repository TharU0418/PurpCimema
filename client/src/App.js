import Home from "./pages/Home";
import Movie from "./pages/Movie";

import {BrowserRouter,Route, Routes} from 'react-router-dom'
import NavBar from "./components/NavBar";
import AddMovie from "./pages/AddMovie";
import SearchBar from "./components/SearchBar";
import SearchPage from "./pages/SearchPage";
import UpdateMovie from './pages/UpdateMovie'
import UpdatePage from './pages/UpdatePage'
import AddTvSeries from './pages/AddTvSeries'
import TVSeries from './pages/TVSeries'

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
        <Route exact path="/SearchBar" element={<SearchBar />}/>
        <Route exact path="/SearchPage" element={<SearchPage />}/>
        <Route exact path="/UpdateMovie" element={<UpdateMovie />} />
        <Route exact path="/UpdatePage" element={<UpdatePage/>} />
        <Route exact path="/AddTvSeries" element={<AddTvSeries/>} />
        <Route exact path ="/TVSeries" element={<TVSeries/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
