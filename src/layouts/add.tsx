import { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useNavigate } from 'react-router-dom';
import { Firebase, Messages } from '../services/@';


/*  Component Logic
/*   *   *   *   *   *   *   *   *   *   */
export default function () {

    //  use navigate
    const navigate = useNavigate();

    //  use state
    const [search, setSearch] = useState( '' );

    //  get chats
    const [snapshot] = useCollection( Messages.Users( search.length < 3 ? '\0' : search.toUpperCase() ));

    //  get users
    const users = snapshot?.docs.map( doc => ({
        uid:            doc.id,
        displayName:    doc.data()?.displayName as string,
        photoURL:       doc.data()?.photoURL    as string,
        email:          doc.data()?.email       as string,
    }));

    
/*  Component Layout
/*   *   *   *   *   *   *   *   *   *   */
return(
<main id='add' >

    <div className='input-group g-2 p-2'>
        <span className='input-group-text' >🔎</span>
        <input type='text' className='form-control' placeholder='Find user' value={ search } onChange={ e => setSearch( e.target.value ) } />
    </div>

    <ul className='list-group' >
    {
        users?.filter( user => user.uid !== Firebase.Auth.currentUser?.uid ).map( user => (
        <li className='preview list-group-item d-flex justify-content-between align-items-start'
            key={ user.uid }
            onClick={ () => navigate( -1 ) }
        >

            <img src={ user.photoURL } alt={ user.displayName } />
            
            <div className='ms-2 w-100' >

                <p className='m-0 p-0 card-title placeholder-glow mb-1' >
                    <span className='fw-bold' >{ user.displayName || '' }</span>
                </p>

                <p className='m-0 p-0 card-text placeholder-glow mb-0' >
                    <span className='fw-light' >{ user.email || '' }</span>
                </p>

            </div>

        </li>
        ))
    }
    </ul>

</main>
)}