import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Index from './pages/Index'
import Detail from './pages/Detail'
import NotFound from './component/NotFound';
import Header from './component/Header';
import Search from './pages/Search';


function App() {
  return(
    <>
    <Router>
      <Header/>
        <Routes>
        <Route path="/" exact element={<Index/>} />
        <Route path="/movie/:Id" exact element={<Detail/>} />
        <Route path="/tv/:Id" exact element={<Detail/>} />
        <Route path="/query/:searchInput" exact element={<Search/>} />
        <Route path="/*" element={<NotFound/>} />
        </Routes>
    </Router>
    </>
  )         
}

export default App;
