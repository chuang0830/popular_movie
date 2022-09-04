import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Index from './pages/index'
import Detail from './pages/Detail'
import NotFound from './component/NotFound';


function App() {
  return(
    <>
    <Router>
      <Routes>
      <Route path="/" exact element={<Index/>} />
      <Route path="/movie/:movieId" exact element={<Detail/>} />
      <Route path="/*" element={<NotFound/>} />
      </Routes>
    </Router>
    </>
  )         
}

export default App;
