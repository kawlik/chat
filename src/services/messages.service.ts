import { addDoc, collection, doc, endAt, getDoc, getDocs, orderBy, query, serverTimestamp, setDoc, startAt, updateDoc, where } from 'firebase/firestore';
import { Firebase } from './@';


/*  Define Service
/*   *   *   *   *   *   *   *   *   *   */
class Service {

    constructor(
        private readonly chats = collection( Firebase.Firestore, 'chats' ),
        private readonly posts = collection( Firebase.Firestore, 'posts' ),
        private readonly users = collection( Firebase.Firestore, 'users' ),
    ) { }

    get Chats() {
        return (userId: string) => query( this.chats, where( 'users', 'array-contains', userId ));
    }

    get Posts() {
        return (chatId: string) => query( this.posts, where( 'chatId', '==', chatId ));
    }

    get Users() {
        return (userDN: string) => query( this.users, orderBy( 'displayName' ), startAt( userDN ), endAt( userDN + '\uf8ff' ));
    }


    async last(chatId: string) {
        return ( await getDoc( doc( this.chats, chatId ))).data();
    }

    async user(userId: string) {
        return ( await getDoc( doc( this.users, userId ))).data();
    }
    

    async chat(authId: string, userId: string) {

        //  validate uids
        if( authId === userId ) return '';

        const snap = await getDocs( query( this.chats, where( `users`, 'array-contains', authId )));
        const chat = snap.docs.map( doc => ({ id: doc.id, users: doc.data().users as Array<string> })).filter( doc => doc.users.includes( userId ));

        //  return existing chat
        if( chat.length ) return chat[0].id;

        return ( await addDoc( this.chats, {
            users: [ authId, userId ],
            last: {
                post: '',
                seen: []
            }
        }) ).id;
    }

    async seen(chatId: string, userId: string, last: {
        post: string,
        user: string,
    }) {
        await updateDoc( doc( this.chats, chatId ), {
            last: {
                post: last.post,
                seen: [ last.user, userId ],
            }
        });
    }

    async send(chatId: string, userId: string, payload: string) {
        await setDoc( doc( this.posts ), {
            timestamp: serverTimestamp(),
            chatId: chatId,
            userId: userId,
            payload: payload,
        });
        await updateDoc( doc( this.chats, chatId ), {
            last: {
                post: payload,
                seen: [ userId ],
            }
        });
    }
}


/*  Export Service
/*   *   *   *   *   *   *   *   *   *   */
export default new Service();