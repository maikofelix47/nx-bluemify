import { Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Survey from './survey/survey';

export function App() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
      fetch('http://localhost:8080/wp-json/wp/v2/posts').then((posts)=>{
        console.log('posts',posts);
      });
  },[]);
  return (
    <div>
      <h2>Bluemify</h2>
      <Survey/>
      <Routes>
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
