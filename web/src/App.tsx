import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { Blog } from './Blog';
import { Home } from './Home';

function App() {
  return (
    <div>
      {/* TODO this is where the navbar type stuff will live, whereas everything in */}
      {/* the Routes will be rendered in the same detail view window within this */}
      {/* container */}
      <Link to={'/'}>Home</Link>
      <Link to={'/blog'}>Blog</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );

}

export default App;
