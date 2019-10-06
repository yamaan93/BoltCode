import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public  afAuth:  AngularFireAuth) {     }

  async login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
        // this.route.navigate(['/dashboard']);
      }).catch((error) => {
        window.alert(error.message)
    })
  }

  async signup(email: string, password: string) {
    await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully registered!");
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
    }
  }