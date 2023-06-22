import { Routes, Route, Link } from 'react-router-dom';
import Survey from './survey/survey';
import Posts from './posts/posts';

export function App() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/survey'>Survey</Link>
      </nav>
      <h2>Bluemify</h2>
      <Routes>
      <Route path="/" element={<Posts />} />
      <Route path="survey" element={<Survey />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
