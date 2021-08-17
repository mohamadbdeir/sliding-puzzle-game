import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {


  scores;
  sortBy = "moves"
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.loadScores();

  }


  loadScores() {

    let path = " https://sliding-puzzle-api.herokuapp.com/api/scores/";
    if(this.sortBy === "time")
    {
      path +="getScoresByMoves";
    }
    else
    {
      path+= "getScoresByTime"
    }

    this.httpClient.get(path).subscribe(data => {
      this.scores = data;

    })
  }

}
