import { useAuthState } from 'react-firebase-hooks/auth';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';

import { Infobar } from './components/@';
import { Add, Chat, Chats, Login } from './layouts/@';
import { Firebase } from './services/@';


/*  Component Logic
/*   *   *   *   *   *   *   *   *   *   */
export default function App() {

    //  get auth 
    const [auth] = useAuthState( Firebase.Auth );

    //  get navigate
    const location = useLocation();
    const navigate = useNavigate();

    console.log( location.pathname );
    
/*  Component Layout
/*   *   *   *   *   *   *   *   *   *   */
return(
<>

    <Infobar
        isAuth={ true }
        inform={ () => Firebase.logout() }
        logout={ () => Firebase.logout() }
        goBack={ () => navigate( -1 ) }
    />

    <Routes>
    {
        !!auth
        ? <>
            <Route path='chat'      element={ <Chats /> } />
            <Route path='chat/:id'  element={ <Chat /> } />
            <Route path='chat/add'  element={ <Add /> } />

            <Route path='*' element={ <Navigate to='chat' /> } />
        </>
        : <>
            <Route path='/' element={ <Login /> } />
            <Route path='*' element={ <Navigate to='/' /> } />
        </>
    }
    </Routes>
</>
)}