import React from 'react'
import { Link } from 'react-router-dom';

const Header = ( props ) => {
    return (
        <header id="headerType" className={`header__wrap ${props.element}`}>
            <div className="header__inner">
                <div className="header__logo">
                    <a href="https://ce.daejin.ac.kr/ce/index.do">DAEJIN <em>CE</em></a>
                </div>
                <nav className="header__menu">
                    <ul>
                        <li><Link to="/">홈</Link></li>
                        <li><Link to="/research">검색</Link></li>
                        <li><Link to="/notice">공지사항</Link></li>
                        <li><Link to="/project">프로젝트</Link></li>
                        <li><Link to="/member">멤버</Link></li>
                        <li><Link to="/contact">기타</Link></li>
                        <li><Link to="/live">라이브</Link></li>
                    </ul>
                </nav>
                <div className="header__member">
                    <a href="/">로그인</a>
                </div>
            </div>
        </header>
    )
}

export default Header