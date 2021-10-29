import { DATABASE_CONFIG } from './constants';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export class Connection {
  static firebase() {
    if (firebase.apps.length === 0) {
      firebase.initializeApp(DATABASE_CONFIG);
    }

    return {
      database: firebase.database(),
      auth: firebase.auth(),
      googleProvider: new firebase.auth.GoogleAuthProvider()
    };
  }
}
