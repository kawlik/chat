import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DocumentData } from 'firebase/firestore';
import { Firebase } from '../services/@';


/*  Component Logic
/*   *   *   *   *   *   *   *   *   *   */
export default function ( prop: {
    chatKey: string,
    contact: Promise<DocumentData| undefined>,
    message: Promise<DocumentData| undefined>,
}) {

    //  get navigate
    const navigate = useNavigate();

    //  use state for promises
    const [contact, setContact] = useState<string>( '' );
    const [profile, setProfile] = useState<string>( '' );
    const [message, setMessage] = useState<string>( '' );
    const [wasSeen, setWasSeen] = useState<boolean>( false );

    //  resolve promieses
    prop.contact?.then( res => setContact( res?.displayName || '' ));
    prop.contact?.then( res => setProfile( res?.photoURL    || '' ));
    prop.message?.then( res => setMessage( res?.last?.post  || '' ));
    prop.message?.then( res => setWasSeen( res?.last?.seen?.includes( Firebase.Auth.currentUser?.uid ) ));

    
/*  Component Layout
/*   *   *   *   *   *   *   *   *   *   */
return(
<li className='preview list-group-item d-flex justify-content-between align-items-start'
    onClick={ () => navigate( prop.chatKey ) }
>
    <img src={ profile } alt={ contact } />

    <div className='ms-2 w-100' >
    <p className='m-0 p-0 card-title placeholder-glow mb-1' >
    {
        !!contact
        ? <span className='fw-bold' >{ contact }</span>
        : <>
            <span className='placeholder col-2 me-1'/>
            <span className='placeholder col-3 me-1'/>
        </>
    }
    </p>
    <p className='m-0 p-0 card-text placeholder-glow mb-0' >
    {
        !!message
        ? <span className='fw-light' >{ message }</span>
        : <>
            <span className='placeholder col-3 me-1'/>
            <span className='placeholder col-5 me-1'/>
            <span className='placeholder col-2 me-1'/>
        </>
    }
    </p>
    </div>

    { !wasSeen && <span className='badge bg-success rounded-pill' >New</span> }

</li>
)}