/*  Component Logic
/*   *   *   *   *   *   *   *   *   *   */
export default function ( prop: {
    authId: string,
    sended: Array<{
        id: string,
        chatId: string,
        userId: string,
        payload: string,
    }>,
}) {

    
/*  Component Layout
/*   *   *   *   *   *   *   *   *   *   */
return(
<section className='posts' >
{
    prop.sended.map( post => (
    <div key={ post.id } className={ `post ${ post.userId === prop.authId ? 'right' : 'left' }` } >
    <div className='payload text-light' >
    {
        post.payload
    }
    </div>
    </div>
    ))
}
</section>
)}