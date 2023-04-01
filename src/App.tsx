import {css} from '@emotion/react';
import {Avatar, IconButton} from '@mui/material';
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { BlogWrapper } from './BlogWrapper';
import {BlogPost} from './BlogPost';
import { Home } from './Home';

function App() {
  const location = useLocation();

  return (
    <div>
      {/* TODO this is where the navbar type stuff will live, whereas everything in */}
      {/* the Routes will be rendered in the same detail view window within this */}
      {/* container */}
      <Link to={'/'} css={homeLink}>
          <Avatar
              src="/src/assets/me-photo.jpg"
              sx={{height: 56, width: 56}}
              alt="Photo of Chris">
          </Avatar>
      </Link>
      <Link to={'/blog'} css={blogLink}>Don't Mind Me</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogWrapper />} />
        <Route path='/blogPost/:blogID' element={<BlogPost />} />
      </Routes>
    </div>
  );

}

export default App;

const homeLink = css({
  position: 'absolute',
  left: '24px',
  top: '24px',
});

const blogLink = css({
  position: 'absolute',
  right: '24px',
  top: '24px',
});
