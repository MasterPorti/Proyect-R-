

import "./video.scss"
export default function Video({ description, imagen }) {

    return (
        <div className="videoContainer">
            <img src={require(`../../provider/${imagen}.png`)} className="videoImagen" />

            <span className="description" >{description}</span>
            <div className="themesContainer">
                <button>JavaScript</button>
                <button>Web</button>
            </div>
        </div>
    )
}