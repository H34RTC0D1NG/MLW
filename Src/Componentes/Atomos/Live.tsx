import '../../Css/Atomos/Live.css'

interface VidProp {

    Video : string;

}

function Live({ Video } : VidProp) {
    return (

        <video className = 'Font' muted autoPlay loop>
            <source src = {Video} type = 'video/mp4' />
        </video>

    )
} export default Live