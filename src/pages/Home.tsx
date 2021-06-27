import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'
import { Button } from '../components/button'
import { UseAuth } from '../hooks/useAuth'
import '../styles/auth.scss'
import { FormEvent, useState } from 'react'
import { database } from '../services/firebase'


export function Home(){
    const history = useHistory();
    const {user, signInWithGoogle} = UseAuth();
    const [roomCode, setRoomCode] = useState('')

   async function HandleCreateRoom(){
        if(!user){
           await signInWithGoogle()
        }
        
        history.push('./rooms/new')

    }

    async function HandleJoinRoom(event: FormEvent){
        event.preventDefault();

        if(roomCode.trim() === ''){
            return;
        }

        const roomRef = await database.ref(`/rooms/${roomCode}`).get()
        if(!roomRef.exists()){
            alert('Rooms doesn´t Exists')
            return;
        }
        history.push(`/rooms/${roomCode}`)
    }
    return( 
    <div id="page-auth">
        <aside>
 
            <img src={illustrationImg} alt="Ilustração simbolizando FAQ"/>
            <strong>Crie Sala de Perguntas e Respostas ao vivo</strong>
            <p>Compartilhe e Aprenda com outras pessoas </p>
        </aside>
        <main className="main-content">
            <div>
                <img src={logoImg} alt="Logo Let Me Ask"/>
                <button onClick={HandleCreateRoom} className="create-room">
                    <img src={googleIconImg} alt="logo Google" />
                    Crie sua sala com o Google
                </button>
                <div className="separator"> ou entre em uma sala</div>
                <form onSubmit={HandleJoinRoom}>
                    <input 
                        type="text"
                        placeholder="Digite o código da sala"
                        onChange={event => setRoomCode(event.target.value)} value={roomCode} />
                    <Button type="submit">Entrar</Button>
                </form>


            </div>
        </main>
    </div>
    )
}

