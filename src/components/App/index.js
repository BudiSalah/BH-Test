import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './../../pages/Home';
import Error from './../../pages/Error';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
