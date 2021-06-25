import { Link, useHistory } from 'react-router-dom'
import {FormEvent, useState} from 'react'

import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'

import { Button } from '../components/button'
import '../styles/auth.scss'
import { database } from '../services/firebase'

import { UseAuth } from '../hooks/useAuth'


export function NewRoom() {

    const {user} = UseAuth()
    const history = useHistory();
    const [newRoom, setNewRoom] = useState('');


    async function HandleCreateRoom(event: FormEvent) {
        event.preventDefault()

        if(newRoom.trim() === ''){
            return;
        }
        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })
        history.push(`/rooms/${firebaseRoom.key}`)

    }
    return(
    <div id="page-auth">
        <aside>
            <img src={illustrationImg} alt="Ilustração simbolizando FAQ" />
            <strong>Crie Sala de Perguntas e Respostas ao vivo</strong>
            <p>Compartilhe e Aprenda com outras pessoas </p>
        </aside>
        <main className="main-content">
            <div>
                <img src={logoImg} alt="Logo Let Me Ask" />
                 <h2>Criar uma Nova Sala</h2>

                <form onSubmit={HandleCreateRoom} action="">
                    <input
                        type="text"
                        placeholder="Nome da Sala"
                        onChange={event => setNewRoom(event.target.value) }
                        value={newRoom} />
                    <Button type="submit">Criar Sala</Button>
                </form>
                <p>Quer entrar em uma sala existente? <Link to='/'>Clique Aqui</Link></p>


            </div>
        </main>
    </div>
    )
}