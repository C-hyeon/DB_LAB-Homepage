import React from "react";
import '../assets/css/board.css'

const posts = [
    {
      id: 1,
      title: "첫 번째 공지사항",
      content: "이것은 첫 번째 게시글의 내용입니다.",
      author: "홍길동",
      date: "2025-04-07",
    },
    {
      id: 2,
      title: "두 번째 공지사항",
      content: "이것은 두 번째 게시글의 내용입니다.",
      author: "김철수",
      date: "2025-04-06",
    },
    // 더미 데이터는 원하는 만큼 추가 가능
  ];

const Notice = () => {
  return (
    <div className="board-container">
      <h1 className="board-title">Notice</h1>
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

export default Notice;
