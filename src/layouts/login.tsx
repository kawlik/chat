import { Firebase } from '../services/@';


/*  Component Logic
/*   *   *   *   *   *   *   *   *   *   */
export default function () {

    
/*  Component Layout
/*   *   *   *   *   *   *   *   *   *   */
return(
<main id='login' >
<form onSubmit={ e => { e.preventDefault() }} >

    <h2 className='display-1 text-center mt-4' >👋</h2>
    <h2 className='display-4 text-center mb-4' >Please sign in</h2>

    <button className='btn btn-lg btn-primary w-100' onClick={ () => Firebase.signInWithFacebook() }>Sign In With Facebook</button>
    <button className='btn btn-lg btn-success w-100' onClick={ () => Firebase.signInWithGoogle() }>Sign In With Google</button>

    <p className='mt-4 text-center text-muted' >© Kawlik 2022</p>

</form>
</main>
)}