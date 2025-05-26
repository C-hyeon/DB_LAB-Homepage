import React from "react";
import '../assets/css/board.css'

const posts = [
    {
      id: 1,
      title: "React.js",
      content: "React.js를 활용한 게시판 UI 만들기",
      author: "홍길동",
      date: "2025-04-07",
    },
    {
      id: 2,
      title: "Unity",
      content: "Unity 게임 개발 툴을 활용한 VR 게임 만들기",
      author: "김철수",
      date: "2025-04-06",
    },
    {
        id: 3,
        title: "Node.js",
        content: "Node.js를 활용한 게시판 만들기",
        author: "김영희",
        date: "2025-04-08",
    },
    // 더미 데이터는 원하는 만큼 추가 가능
  ];

const Project = () => {
  return (
    <div className="board-container">
      <h1 className="board-title">Project</h1>
      <div className="board-grid">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            <div className="post-meta">
              작성자: {post.author} | {post.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
