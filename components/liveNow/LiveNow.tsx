import './liveNow.css';

interface Props {
    live: string
}

function LiveNow({live}: Props) {
    return(
        <div className='liveNow'>
            <div className='box'></div>
            <p>LIVE СЕЙЧАС • {live} МАТЧА</p>
        </div>
    )
}

export default LiveNow;