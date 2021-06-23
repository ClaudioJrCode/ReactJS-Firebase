import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import googleIconImg from '../assets/google-icon.svg'
import { Button } from '../components/button'
import { UseAuth } from '../hooks/useAuth'
import '../styles/auth.scss'


export function Home(){
    const history = useHistory();
    const {user, signInWithGoogle} = UseAuth();

   async function HandleCreateRoom(){
        if(!user){
           await signInWithGoogle()
        }
        
        history.push('./rooms/new')

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
                <form action="">
                    <input type="text" placeholder="Digite o código da sala" name="" id="" />
                    <Button type="submit">Entrar</Button>
                </form>


            </div>
        </main>
    </div>
    )
}

function useAuth(): { user: any; signInWithGoogle: any } {
    throw new Error('Function not implemented.')
}
