import React from 'react';
import { useParams } from 'react-router-dom';
import Data from "../../provider/data";
import Logo from "../../assets/logo.svg"
import "./profileCourse.scss"
function ProfileCourse(props) {
    const { Paramsuuid } = useParams();

    const dataInfo = Data()
    const videoInfo = dataInfo.data.find(({ uuid }) => uuid === Paramsuuid)

    return (
        <div className='ContainerVideo'>
            <img src={Logo} className="logo" />
            <h1>Este es el curso de {videoInfo.name}</h1>
        </div>
    );
}

export default ProfileCourse;  