import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInAnonymously, signInWithPopup } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

import { Firebase } from '../configs/@';


/*  Define Service
/*   *   *   *   *   *   *   *   *   *   */
class Service {

    constructor(
        private readonly auth = getAuth( Firebase ),
        private readonly firestore = getFirestore( Firebase ),
    ) {
        onAuthStateChanged( this.Auth, async ( user ) => {

            //  test if user is valid
            if( !user || user.isAnonymous ) return;

            //  save user in firestore
            await setDoc( doc( this.Firestore, 'users', user.uid ), {
                uid:            user.uid,
                displayName:    user.displayName?.toUpperCase(),
                photoURL:       user.photoURL,
                email:          user.email,
            });
        });
    }

    get Auth() { return this.auth; }
    get Firestore() { return this.firestore; }

    logout = () => this.Auth.signOut();

    signInAnonymously = () => signInAnonymously( this.Auth );
    signInWithGoogle = () => signInWithPopup( this.Auth, new GoogleAuthProvider());
}


/*  Export Service
/*   *   *   *   *   *   *   *   *   *   */
export default new Service();