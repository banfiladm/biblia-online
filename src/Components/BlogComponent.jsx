// src/Components/BlogComponent.jsx

import React from 'react';

const blogPosts = [
  {
    title: 'Artigo 1',
    date: '29 de março de 2023',
    content: 'Conteúdo do artigo 1...'
  },
  {
    title: 'Artigo 2',
    date: '28 de março de 2023',
    content: 'Conteúdo do artigo 2...'
  },
  // ... Adicione mais artigos do blog conforme necessário
];

function BlogComponent() {
  return (
    <div>
      <h1>Blog Religioso</h1>
      {blogPosts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <h4>{post.date}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogComponent;
