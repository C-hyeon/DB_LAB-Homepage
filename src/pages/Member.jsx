import React, { useState } from "react"
import Modal from "../modals/Member_modal"

import '../assets/css/reset.css'
import '../assets/css/style.css'
import '../assets/css/member.css'
import profileImg from '../assets/img/ex_profile.jpg'
import professorImg from '../assets/img/professor.jpg'

import { FaReact } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { FaUnity } from "react-icons/fa";

const Member = () => {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const member = [
        {
            id: 1, 
            userName: '한석희', 
            userProfile: profileImg, 
            userProject: '생성형 AI 활용 인공지능 개발', 
            userIcon: <RiOpenaiFill/>
        },
        {
            id: 2, 
            userName: '정도현', 
            userProfile: profileImg, 
            userProject: 'React + Node.js 활용 웹사이트 개발', 
            userIcon: <FaReact/>
        },
        {
            id: 3, 
            userName: '김종윤', 
            userProfile: profileImg, 
            userProject: 'React + Next.js 활용 웹사이트 개발', 
            userIcon: <FaReact/>
        },
        {
            id: 4, 
            userName: '안영수', 
            userProfile: profileImg, 
            userProject: 'Unity + VR 활용 공포 게임 개발', 
            userIcon: <FaUnity />
        },
        {
            id: 5, 
            userName: '김예린', 
            userProfile: profileImg, 
            userProject: 'Unity 활용 팜 시뮬레이션 게임 개발', 
            userIcon: <FaUnity />
        },
        {
            id: 6,
            userName: '이호진',
            userProfile: profileImg,
            userProject: 'Unity 게임 개발',
            userIcon: <FaUnity />
        }
    ]

    const expandModal = (e) => {
        setSelectedProject(e);
        setOpen(true);
    }

    const closeModal = () => {
        setSelectedProject(null);
        setOpen(true);
    }

    return (
        <div id="main" className="wrapper style">
            <div className="container">
                <div id="content">
                    <br/>
                    <h1>Professor</h1>
                    <hr />
                    <div className="row" style={{ paddingBottom: "10%" }}>
                        <div className="col-4 col-12-medium">
                            <br/>
                            <img alt="prof" className="professorImg" src={professorImg} />
                        </div>
                        <div className="col-8 col-12-large member__font">
                            <h2 style={{fontWeight: '600'}}>신 판 섭</h2>
                            <div className="col-8 col-12-small" style={{ display: "flex" }}>
                                <div className="col-8 col-12-small" style={{ width: "300px" }}>
                                    <p>전 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 공</p>
                                    <p>소속 학회</p>
                                    <br />
                                    <p>연구 분야</p>
                                    <p>학력 사항</p>
                                </div>
                                <div className="col-8 col-12-small" style={{ color: '#e44c65' }}>
                                    <p>[컴퓨터공학전공] 데이터베이스 시스템</p>
                                    <p>한국멀티미디어학회, 한국인터넷정보학회, 한국정보처리학회, 한국컴퓨터정보학회, 한국디지털정책학회, 한국창의정보문화학회</p>
                                    <p>분산 객체 데이터베이스, 멀티미디어 시스템, 시맨틱 웹</p>
                                    <p>박사 : 홍익대학교, 데이터베이스시스템 전공, 2000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1>Member</h1>
                    <hr />
                    <div className="row members" style={{ flexWrap: "wrap" }}>
                        <div className="row members member__font">
                            {member.map((e) => (
                                <div key={e.id} className="col-4 col-12-medium mem" style={{textAlign:"center", marginBottom: "20px"}}>
                                    <h4 onClick={() => expandModal(e)}>{e.userName}</h4>
                                    <img alt={e.id} style={{borderRadius: "80%", objectFit: "cover", width: "200px"}} src={e.userProfile} />
                                    {selectedProject ?
                                        <Modal isOpen={open} onClose={closeModal}>
                                            <img alt={e.id} style={{borderRadius: "80%", objectFit: "cover", width: "150px"}} src={e.userProfile} />
                                            <br/><br/>
                                            <h3 style={{fontWeight: '600'}}> &nbsp;&nbsp;&nbsp;{selectedProject.userName} {selectedProject.userIcon}</h3>
                                            <hr/>
                                            <div className='wrapper' style={{textAlign: 'left'}}>
                                                <p>프로젝트 &nbsp; | &nbsp; {selectedProject.userProject}</p>
                                            </div>
                                        </Modal>
                                    : null}
                                </div>
                            ))}
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Member