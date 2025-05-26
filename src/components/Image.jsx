import React from 'react'

const Image = ( props ) => {
    return (
        <section id="imageType" className={`imageType__wrap ${props.element}`}>
            <h2>{props.title}</h2>
            <p>대진대학교 데이터베이스 연구실 담당교수 및 랩장입니다.</p>
            <div className="image__inner container">
                <article className="image img1">
                    <em>Professor</em>
                    <h3 className="image__title">신판섭</h3>
                    <p className="image__desc">[컴퓨터공학전공] 데이터베이스 시스템</p>
                    <a className="image__btn" href="/member">자세히 보기</a>
                </article>
                <article className="image img2">
                    <em>Laboratory Leader</em>
                    <h3 className="image__title">한석희</h3>
                    <p className="image__desc">[컴퓨터공학전공] 실습 조교</p>
                    <a className="image__btn yellow" href="/member">자세히 보기</a>
                </article>
            </div>
        </section>
    )
}

export default Image