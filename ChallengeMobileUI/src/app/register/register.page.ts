import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from "../shared/models/users.model";
import {UserService} from "../shared/services/user.service";
import {NativeStorage} from "@ionic-native/native-storage/ngx";
import {Router} from "@angular/router";
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private userService: UserService, private localStorage: NativeStorage,private router: Router) { }

  ngOnInit() {
    localStorage.clear();
  }

  onSubmit(form: NgForm) {
    const userToRegister: User =
      {
        name: form.value.name,
        surname: form.value.surname,
        email: form.value.email,
        cellPhone: form.value.cellPhone

      };
    this.userService.registerUser(userToRegister).subscribe(
      (userCreated)=>{
        localStorage.setItem("user",JSON.stringify({
          id: userCreated.id,
          name: userCreated.name,
          surname: userCreated.surname,
          email: userCreated.email,
          cellPhone: userCreated.cellPhone,
        }));
        this.router.navigate(['play']);
      },
      (error)=>{
        console.error(error);
      }

    )

  }
}
