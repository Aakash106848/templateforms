import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateforms';
  detailsArray:any[] = [];
  enable: boolean = false;
  getuserarray:any[] = [];

  addUser(value: any){
    
    console.log(value);
    
    this.detailsArray.push(value);
  }
  deleteUser(user: any){
    this.detailsArray.splice(this.detailsArray.indexOf(user),1);
  }
  UpdateUser(user: any){
    const updatedUser = this.detailsArray.find(x => x.firstName === user.firstName);
    updatedUser.lastName = user.lastName;
    updatedUser.email = user.email;
   
    updatedUser.salary = user.salary; 
  }
  hideshow()
  {
    this.enable = !this.enable;
  } 
  getUser(user: any)
  {
    this.getuserarray.pop();
    const x = this.detailsArray.find(x => x.firstName === user.firstName);
    this.getuserarray.push(x);
  }

}
