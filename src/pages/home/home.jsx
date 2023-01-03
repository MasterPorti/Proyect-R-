import { Link } from "react-router-dom";
import Intro from "../../modules/intro/intro";
import Trending from "../../modules/trending/trending";
import Video from "../../modules/video/video";
import Data from "../../provider/data";
import "./home.scss"
const data = Data()
export default function Home() {
    return (
        <div className="home">
            <Intro></Intro>
            <Trending></Trending>
            <div className="ContainerVideos">
                {data.data.map(function (video, i) {
                    return <Link to={`profileCourse/${video.uuid}`}>
                        <Video description={video.name} imagen={`${video.image}`} key={i}></Video></Link>
                })}
                {
                    console.log(data.data.find(({ uuid }) => uuid === "7ac37bda-6cc2-4487-90aa-9ab979b25d61"))
                }
            </div>
        </div>
    )
}

