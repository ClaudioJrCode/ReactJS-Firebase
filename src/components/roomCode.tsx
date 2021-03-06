import copyImg from '../assets/copy.svg'
import '../styles/roomCode.scss'

type RoomCodeProps = {
    code:string;
}
export function RoomCode(props: RoomCodeProps){
    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code)
    }

    return(
        <button onClick={copyRoomCodeToClipboard}className='room-code'>
            <div>
                <img src={copyImg} alt="Copy Room Code" />
            </div>

            <span>Sala #{props.code}</span>
            
        </button>
    )
}