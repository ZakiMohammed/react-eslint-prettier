import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import About from './pages/About';
import UserList from './pages/UserList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="container my-5">
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
