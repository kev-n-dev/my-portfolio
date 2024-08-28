// src/pages/Blog.tsx
import React from 'react';
import EmbeddedPage from '../components/EmbededPage';

const Blog: React.FC = () => {
  return (
 

<div className="embedded-page-container">
<iframe  
  src="https://coding-corps.github.io/CodingCompass/#/" 
  className=" blog embedded-page"
   allowFullScreen
></iframe>
</div>
  );
};

export default Blog;