import { useCollection } from 'react-firebase-hooks/firestore';
import { useNavigate } from 'react-router-dom';
import { Preview } from '../components/@';
import { Firebase, Messages } from '../services/@';


/*  Component Logic
/*   *   *   *   *   *   *   *   *   *   */
export default function () {

    //  get navigate
    const navigate = useNavigate();

    //  get chats
    const [snapshot] = useCollection( Messages.Chats( Firebase.Auth.currentUser?.uid || '' ));

    //  set chats
    const chats = snapshot?.docs.map( doc => ({ id: doc.id, users: doc.data().users as Array<string> }));


/*  Component Layout
/*   *   *   *   *   *   *   *   *   *   */
return(
<main id='chats' >

    <ul className='list-group' >
    {
        chats?.map( chat => (
        <Preview
            key={ chat.id }
            chatKey={ chat.id }
            contact={ Messages.user( chat.users.find( user => user !== Firebase.Auth.currentUser?.uid ) || '' ) }
            message={ Messages.last( chat.id ) }
        /> 
        ))
    }
    </ul>

    <p className='mt-5 mb-0 text-center text-muted' >Maybe add a new chat? 💬</p>

    <button className='btn btn-primary btn-add px-3 py-1 shadow' onClick={ () => navigate( 'add' ) }>Add</button>

</main>
)}