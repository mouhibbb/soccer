import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
match:any={}
teams:any=[]
newMatchForm:FormGroup
  constructor(private fB:FormBuilder) { }

  ngOnInit() {
    this.newMatchForm=this.fB.group({
      teamOne:[''],
      teamTwo:[''],
      scoreOne:[''],
      scoreTwo:['']
    })
    this.teams=JSON.parse(localStorage.getItem("teams")||"[]")

  }
  newMatch(){
    console.log(this.match);
    this.match.role="football match"
    let idMatch=JSON.parse(localStorage.getItem("idMatch")||"1")
    this.match.id=idMatch
    let matchs=JSON.parse(localStorage.getItem("matchs")|| "[]")
    matchs.push(this.match)
    localStorage.setItem("matchs",JSON.stringify(matchs))
    localStorage.setItem("idMatch",idMatch+1)
  }

}
