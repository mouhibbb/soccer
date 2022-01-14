import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
users:any=[]
players:any=[]
teams:any=[]
matchs:any=[]
constructor(private router:Router) { }

  ngOnInit() {
    this.users=JSON.parse(localStorage.getItem("users") ||"[]")
    this.players=JSON.parse(localStorage.getItem("players") ||"[]")
    this.teams=JSON.parse(localStorage.getItem("teams") ||"[]")
    this.matchs=JSON.parse(localStorage.getItem("matchs") ||"[]")
    }

 displayUser(id:any,name:any){
this.router.navigate([`displayUser/${name}/${id}`]) }

editTeam(id:any){
this.router.navigate([`editTeam/${id}`]);

}  

edit(id:any){
  this.router.navigate([`editUser/${id}`]);
}
deleteUser(id:any){
  let pos;
  this.users=JSON.parse(localStorage.getItem("users")||"[]")
  for (let i = 0; i < this.users.length; i++) {
    if (this.users[i].id==id) {
      pos=i
    }
  }
    this.users.splice(pos,1)
    localStorage.setItem("users",JSON.stringify(this.users))
  
}
deletePlayer(id:any){
  let pos;
  this.users=JSON.parse(localStorage.getItem("players")||"[]")
  for (let i = 0; i < this.players.length; i++) {
    if (this.players[i].id==id) {
      pos=i
    }
  }
    this.players.splice(pos,1)
    localStorage.setItem("players",JSON.stringify(this.players))
  
}
displayMatch(id:any){
  this.router.navigate([`displayMatch/${id}`]) 

}
deleteTeam(newTeam:any){
  console.log(newTeam);
let players=JSON.parse(localStorage.getItem("players")||"[]")
let teams=JSON.parse(localStorage.getItem("teams")||"[]")
for (let i = 0; i < players.length; i++) {
  if (players[i].team==newTeam) {
    players.splice(i,1)
}  
}
localStorage.setItem("players",JSON.stringify(players))

for (let i = 0; i < teams.length; i++) {
  if (teams[i].newTeam==newTeam) {
    teams.splice(i,1)
}  
}
localStorage.setItem("teams",JSON.stringify(teams))

}
getColor(role){
  switch (role) {
    case  'client':
      return 'blue'
      break 
      case  'chef':
      return'red'
      break;
       case 'client':
      return  'blue'
      break;
  
    default:
      break;
  }
}

}


