import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services.ts/scoreService';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.css']
})
export class WinnerDialogComponent implements OnInit {


  name: String;
  time: String;
  moves: number;
  constructor(public scoreService: ScoreService, public dialogRef: MatDialogRef<WinnerDialogComponent>, private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {


  }


  cancel() {

    this.dialogRef.close();

  }

  submit() {
    this.time = this.scoreService.hours + ":" + this.scoreService.minutes + ":" + this.scoreService.seconds;
    this.moves = this.scoreService.moves;
    let score = { "name": this.name, "time": this.time, "moves": this.moves };

    
    this.httpClient.post(' https://sliding-puzzle-api.herokuapp.com/api/scores/addScore', score).subscribe();


    this.dialogRef.close();
    this.router.navigate(['/'])
  }
}
