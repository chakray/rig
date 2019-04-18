import { Injectable } from '@angular/core';
import * as fb from 'firebase';
import { Observable, from } from 'rxjs';

function fromSub<T>(obj, key) {
  return new Observable<T>(s => {
    return { unsubscribe: obj[key](s) };
  });
}

/**
 * wrapper for firebase.Auth
 */
export class Auth {
  state: Observable<fb.User|null>;
  token: Observable<fb.User|null>;
  constructor(private auth: fb.auth.Auth) {
    this.state = fromSub<fb.User>(auth, 'onAuthStateChanged');
    this.token = fromSub<fb.User>(auth, 'onIdTokenChanged');
  }
  /**
   * @param email valid email
   * @return observable sign in methods
   */
  check(email: string): Observable<any> {
    return from(this.auth.fetchSignInMethodsForEmail(email));
  }
  /**
   * @remark create new auth
   * @param email valid email
   * @param pass string as passwords
   * @return observable of user info
   */
  create({ email, pass }) {
    return from(this.auth.createUserWithEmailAndPassword(email, pass));
  }
  /**
   * @remark restore auth status by given input
   * @param email (optional) valid email
   * @param pass (optional) string as passwords
   * @return observable of user info
   */
  restore({ email, pass }: any = {}) {
    let p: Promise<any>;
    if (email) {
      p = this.auth.signInWithEmailAndPassword(email, pass);
    }
    return from(p);
  }
  /**
   * @remark destroy client auth
   * @return observable to notify its done
   */
  destroy() {
    return from(this.auth.signOut());
  }
}
