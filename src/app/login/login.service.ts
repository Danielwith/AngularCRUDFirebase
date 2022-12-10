import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  token: string | undefined;
  constructor(public afAuth: AngularFireAuth, public router: Router) {}

  login(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        this.afAuth.currentUser.then((user) => {
          if (user) {
            user.getIdToken().then((token) => {
              this.token = token;
            });
          }
        });
        this.router.navigate(['/']);
      })

      .catch((error) => {
        window.alert(error.message);
      });
  }

  getIdToken() {
    return this.token;
  }

  isAutenticated() {
    return this.token != null;
  }

  logOut() {
    this.afAuth
      .signOut()
      .then(() => {
        this.token = undefined;
        this.router.navigate(['login']);
      })
      .catch((error) => {
        console.log('Error: ' + error);
      });
  }
}
