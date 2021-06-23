import {Link} from 'react-router-dom'
import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'
import { Button } from '../components/button'
import '../styles/auth.scss'


export function NewRoom(){
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
                <h2>Criar uma Nova Sala</h2>
                
                <form action="">
                    <input type="text" placeholder="Nome da Sala" name="" id="" />
                    <Button type="submit">Criar Sala</Button>
                </form>
                <p>Quer entrar em uma sala existente? <Link to='/'>Clique Aqui</Link></p>


            </div>
        </main>
    </div>
    )
}