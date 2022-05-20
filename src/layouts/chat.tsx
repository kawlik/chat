import { useCollection } from 'react-firebase-hooks/firestore';
import { useParams } from 'react-router-dom';
import { Compose, Posts } from '../components/@';
import { Firebase, Messages } from '../services/@';


/*  Component Logic
/*   *   *   *   *   *   *   *   *   *   */
export default function () {

    //  get params
    const { id } = useParams();

    //  get chats
    const [snapshot] = useCollection( Messages.Posts( id || '' ));

    //  get posts
    const posts = snapshot?.docs.sort(( p, q ) => {
        return p.data().timestamp?.seconds < q.data().timestamp?.seconds ? 1 : -1;
    }).map( doc => ({
        id:         doc.id,
        chatId:     doc.data().chatId   as string,
        userId:     doc.data().userId   as string,
        payload:    doc.data().payload  as string,
    }));

    //  set seen
    posts?.length && Messages.seen( id || '', Firebase.Auth.currentUser?.uid || '', {
        post: posts[0].payload,
        user: posts[0].userId,
    });


/*  Component Layout
/*   *   *   *   *   *   *   *   *   *   */
return(
<main id='chat' >

    <Posts
        authId={ Firebase.Auth.currentUser?.uid || '' }
        sended={ posts || [] }
    />

    <Compose
        send={ (payload: string) => Messages.send( id || '', Firebase.Auth.currentUser?.uid || '', payload ) }
    />

</main>
)}