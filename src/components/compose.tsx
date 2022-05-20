import { useState } from 'react';


/*  Component Logic
/*   *   *   *   *   *   *   *   *   *   */
export default function ( prop: {
    send(payload: string): Promise<void>
}) {

    //  use state for message
    const [message, setMessage] = useState( '' );
    const [sending, setSending] = useState( false );

    
/*  Component Layout
/*   *   *   *   *   *   *   *   *   *   */
return(
<section className='compose row g-2 p-2 placeholder-glow' >

    <textarea className='form-control' disabled={ !!sending } value={ message } rows={ message.includes( '\n' ) ? 2 : 1 } onChange={ e => {
        e.preventDefault();
        setMessage( e.target.value );
    }} />

    <button className='btn btn-primary' disabled={ !!sending || !message.trim().length } onClick={ async ( e ) => {
        e.preventDefault();

        //  lock button
        setSending( true );

        //  await for send
        await prop.send( message );
        
        //  unlock button
        setSending( false );
        setMessage( '' );

    }}>🕊️</button>

</section>
)}