import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css']
})
export class DisplayUserComponent implements OnInit {
id:any
name:any
user:any
player:any={}
  constructor( private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.id);
    this.name=this.activatedRoute.snapshot.paramMap.get('name')
    console.log(this.name);
    let users=JSON.parse(localStorage.getItem("users")|| "[]")
    console.log(users);
    let teams=JSON.parse(localStorage.getItem("teams")|| "[]")
    console.log(teams);teams
    let players=JSON.parse(localStorage.getItem("players")||"[]")
console.log(players);

    for (let i = 0; i < users.length; i++) {
      if (users[i].id==this.id && users[i].role==this.name) {
        this.user=users[i]
      }}
      for (let i = 0; i < players.length; i++) {
        if (players[i].id==this.id && players[i].role==this.name) {
          this.user=players[i]
        
      }
      }
      for (let i = 0; i < teams.length; i++) {
        if (teams[i].id==this.id && teams[i].role==this.name) {
          this.user=teams[i]
        
      }
      }
    

   
    console.log("azerty",this.user);
    console.log("azerty",this.user.post);

    
    
  }

}
