import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {
  id:any
  match:any={}
  matchs:any=[]
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.id);
    this.matchs=JSON.parse(localStorage.getItem("matchs")|| "[]")
    console.log(this.matchs);
    for (let i = 0; i < this.matchs.length; i++) {
      if (this.matchs[i].id==this.id) {
        this.match=this.matchs[i]
      }
      console.log(this.match);
      
    }
  }

}
