import Strongs from "../../assets/strongs.svg"
import "./trending.scss"
export default function Trending() {
    return (
        <div className="containerTrending">
            <img src={Strongs} className="strongIcon" />
            <span className="trendingTitle">Trending</span>
        </div>
    )
}