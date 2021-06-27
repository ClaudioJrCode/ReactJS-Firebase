//import { FormEvent, useState } from 'react'
import{useParams} from 'react-router-dom'
import logoImg from '../assets/logo.svg'
import { Button } from '../components/button'
import { RoomCode } from '../components/roomCode'

//import { database } from '../services/firebase'
import { Question } from '../components/question'
import "../styles/room.scss"
import { useRoom } from '../hooks/useRoom'




type RoomParams = {
    id: string;
}
export function AdminRoom(){

    const params = useParams<RoomParams>();

    const roomId = params.id

    const {questions, title} = useRoom(roomId);


    
    return(
        <div id="page-room">
            
            <header>
                <div className="content">
                    <img src={logoImg} alt="Let Me Ask"  />
                    <div>
                    <RoomCode code={roomId}/>
                    <Button>Encerrar Sala</Button>
                    </div>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span> {questions.length} pergunta(s)</span> }
                </div>

                <div className="questions-list">
                    

                {questions.map(question=>{
                    return(
                        <Question
                        key={question.id} 
                        content={question.content}
                        author={question.author}
                        />
                    )
                })}
                </div>
             
            </main>
        
        </div>
    )
}