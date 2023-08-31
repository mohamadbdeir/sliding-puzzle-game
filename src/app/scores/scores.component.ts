import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { baseUrl } from '../utils/urls';


@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {


  scores;
  sortBy = "moves"
  loading = true;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.loadScores();

  }


  loadScores() {

    this.loading = true;
    //let path = " https://sliding-puzzle-api.herokuapp.com/api/scores/";


    //let path = "http://localhost:5000/api/scores"

    let path = baseUrl + "Scores/getScoresByTime"

    if (this.sortBy === "time") {
      //path +="getScoresByMoves";

      path = baseUrl + "scores/getScoresByMoves"
    }
    else {
      //path+= "getScoresByTime"
      path = baseUrl + "scores/getScoresByTime"
    }

    //console.log(path)
    this.httpClient.get(path).subscribe(data => {
      this.scores = data;
      this.loading = false;
    })
  }

}
