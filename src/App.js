import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import Review from './component/Review/Review';
import Home from './component/home/Home';
import Dashboard from './component/Dashboard/Dashboard';
import Blogs from './component/Blogs/Blogs';
import About from './component/About/About';
import NotFoundPage from './component/NotFoundPage/NotFoundPage';
import CustomTitle from './hooks/title';
import GetTravelSite from './hooks/getTravelSite';

function App() {
  CustomTitle()
  const [sites, setSites] = GetTravelSite();
  return (
    < div className="App" >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home sites={sites}></Home>} />
        <Route path="/home" element={<Home sites={sites}></Home>} />
        <Route path="/review" element={<Review sites={sites}></Review>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/about" element={<About></About>} />
        <Route path="*" element={<NotFoundPage></NotFoundPage>} />
      </Routes>
    </div >
  );
}

export default App;
