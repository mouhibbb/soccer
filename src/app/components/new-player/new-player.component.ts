import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {
player:any={}
newPlayerForm:FormGroup
teams:any=[]
  constructor(private fB:FormBuilder) { }

  ngOnInit() {
    this.newPlayerForm=this.fB.group({
      firstName:[''],
      lastName:[''],
      post:[''],
      nbTshirt:[''],
      team:['']

    })
    this.teams=JSON.parse(localStorage.getItem("teams")||"[]")
  }
  addNewPlayer(){
    console.log(this.player);
    this.player.role="footballplayer"
    let idPlayer=JSON.parse(localStorage.getItem("idPlayer")||"1")
    this.player.id=idPlayer
    let players=JSON.parse(localStorage.getItem("players")||"[]")
    players.push(this.player)
    localStorage.setItem("players",JSON.stringify(players))
    localStorage.setItem("idPlayer",idPlayer+1)
  }
}
