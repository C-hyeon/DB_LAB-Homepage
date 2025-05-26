import React from 'react';

import '../assets/css/reset.css'
import '../assets/css/style.css'

import Main from '../components/Main'
import Slider from '../components/Slider';
import Image from '../components/Image';
import Card from '../components/Card';

const Home = () => {
    return (
        <>
            <Main>
                <Slider element="nexon" />
                <Image element="section nexon" title="데이터베이스 연구실" />
                <Card element="section nexon" title="프로젝트" />
            </Main>
        </>
    )
}

export default Home