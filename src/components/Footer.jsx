import React from 'react'
import { Link } from 'react-router-dom';

const Footer = ( props ) => {
    return (
        <footer id="footerType" className={`footer__wrap ${props.element}`}>
            <h2 className="blind">푸터 영역</h2>
            <div className="footer__inner container">
                <div className="footer__menu">
                    <div>
                        <h3>홈</h3>
                        <ul>
                            <li><a href="/">메인 홈</a></li>
                            <li><a href="https://www.daejin.ac.kr/daejin/index.do">대진대학교</a></li>
                            <li><a href="https://ce.daejin.ac.kr/ce/index.do">컴퓨터공학전공</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>검색</h3>
                        <ul>
                            <li><Link to="/notice">공지사항</Link></li>
                            <li><Link to="/project">프로젝트</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>프로젝트</h3>
                        <ul>
                            <li><a href="/">백엔드</a></li>
                            <li><a href="/">프론트엔드</a></li>
                            <li><a href="/">데이터베이스</a></li>
                            <li><a href="/">유니티</a></li>
                            <li><a href="/">기타</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>멤버</h3>
                        <ul>
                            <li><a href="/member">한석희</a></li>
                            <li><a href="/member">정도현</a></li>
                            <li><a href="/member">김종윤</a></li>
                            <li><a href="/member">안영수</a></li>
                            <li><a href="/member">김예린</a></li>
                            <li><a href="/member">이호진</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>기타</h3>
                        <ul>
                            <li><Link to="/contact">찾아오는 길</Link></li>
                            <li><Link to="/contact">모집 공고</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>라이브</h3>
                        <ul>
                            <li><Link to="/live">라이브 캠</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    © Untitled. All rights reserved.<br />Design: DB LAB
                </div>
            </div>
        </footer>
    )
}

export default Footer