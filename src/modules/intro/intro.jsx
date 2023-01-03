import "./intro.scss"
import Logo from "../../assets/logo.svg"
import Arrow from "../../assets/arrow.svg"

export default function Intro() {
    return (
        <div className="intro">
            <img src={Logo} className="logo" />
            <div className="titleContainer">
                <span className="title">El conocimiento es</span>
                <span className="subtitle">GRATIS</span>
                <input className="search" placeholder="Curso de JavaScript" ></input>
            </div>
            <div className="containerButton">
                <button className="buttonThemes">ES6</button>
                <button className="buttonThemes">UI/UX</button>
                <button className="buttonThemes">node.js</button>
            </div>
            <div className="allvideosContainer">
                <button className="buttonAllVideos">Todos los cursos <img src={Arrow} /> </button>
            </div>
        </div>
    )

}