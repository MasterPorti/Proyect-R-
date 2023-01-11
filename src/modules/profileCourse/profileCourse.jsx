import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Data from "../../provider/data";
import Logo from "../../assets/logo.svg"
import Arrow from '../../assets/arrow2.svg';
import "./profileCourse.scss"
function ProfileCourse(props) {
    const { Paramsuuid } = useParams();

    const dataInfo = Data()
    const videoInfo = dataInfo.data.find(({ uuid }) => uuid === Paramsuuid)
    const url = `http://localhost:5173/${videoInfo.cursall}`
    return (
        <div className='ContainerVideo'>
            <Link to="/">
                <img src={Logo} className="logo" />
            </Link>
            <div className='containerVideo'>
                <div className='ContainerThumbnail'>
                    <img src={require(`../../provider/${videoInfo.image}.png`)} className="thumbnail" />
                    <div className='descriptionContainer thumbnailmd'>
                        <span className="description " >{videoInfo.name}</span>
                        <div className="themesContainerThum">
                            <button>JavaScript</button>
                            <button>Web</button>
                        </div>
                    </div>
                </div>
                <div className='data'>
                    <span className='thumbnailTitle'>Encriptado</span>
                    <span className='thumbnailEncrypted'>
                        30baa06a03203139d04e6bc724e7f5efdb78a25f9da0eec4012f468f9e30a205+2i6lJvy+DhnlS3EBo8WadlP2Eh8TtkJ1Qb5AjT1siNPdHN3mYSiKxz7grhbHBSZvbq50OtgnbA++KkwMZXJZVsoGP9MIvavBi7TkWZhkUovhH5jIt40PvVFb6aULEOZ/mgQNllKV6XXzvvd2NGbcA==</span>
                    <span className='thumbnailTitle'>Clave:</span>
                    <span className='thumbnailEncrypted'>cursall</span>
                </div>
            </div>
            <div className='decryptContainer'>
                <a href={url}><button className='decryptButton'><span>Desencriptar</span> <img src={Arrow} className='decryptArrow' /> </button></a>
            </div>
        </div>
    );
}

export default ProfileCourse;   