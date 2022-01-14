import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})
export class NewTeamComponent implements OnInit {
team:any={}
newTeamForm:FormGroup
id:any
title:any
  constructor(private fB:FormBuilder,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.newTeamForm=this.fB.group({
      team:[''],
      description:[''],
      pic:['']
    })
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      //edit team
      this.title="Edit Team"
      let teams=JSON.parse(localStorage.getItem("teams")||"[]")
      for (let i = 0; i < teams.length; i++) {
        if (teams[i].id==this.id) {
          this.team=teams[i]
          
        }
        
      }

      
    }
    else{
      this.title="Add Team"
    }
    
  }
  addNewTeam(){
    if (this.id){
      //edit team
      let teams=JSON.parse(localStorage.getItem("teams")||"[]")
      let idTeam=JSON.parse(localStorage.getItem("idteam")||"1")
      for (let i = 0; i < teams.length; i++) {
        if (teams[i].id==this.id) {
          teams[i]=this.team
        }
        localStorage.setItem("teams",JSON.stringify(teams))

      }
  
    }
    else{
    console.log(this.team);
    this.team.role="footballteam"
    let idTeam=JSON.parse(localStorage.getItem("idteam")||"1")
    this.team.id=idTeam
    let teams=JSON.parse(localStorage.getItem("teams")||"[]")
    teams.push(this.team)
    localStorage.setItem("teams",JSON.stringify(teams))
    localStorage.setItem("idteam",idTeam+1)
    }
  }
}
