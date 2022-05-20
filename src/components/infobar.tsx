/*  Component Logic
/*   *   *   *   *   *   *   *   *   *   */
export default function ( prop: {
    isAuth: boolean,
    inform(): void,
    logout(): void,
    goBack(): void,
}) {

    
/*  Component Layout
/*   *   *   *   *   *   *   *   *   *   */
return(
<header className='infobar' >
{
    prop.isAuth
    ? <>
        <button className='btn' onClick={ () => prop.goBack() } >🔥</button>

        <button className='btn ms-auto' onClick={ () => prop.logout() } >Logout</button>
    </>
    : <>
        <span className='lead' >✨</span>

        <button className='btn ms-auto' onClick={ () => prop.logout() } >Info</button>
    </>
}
</header>
)}