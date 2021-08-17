import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { ClickService } from '../services.ts/clickService'
import { ScoreService } from '../services.ts/scoreService';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {


  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  interval;
  started = false;
  paused = false;
  numberOfClicks = 0;
  constructor(private clickService: ClickService, private scoreService: ScoreService) {


  }


  start() {
    this.started = true;
    this.interval = setInterval(() => {
      this.timer();
    }, 1000)

  }


  timer() {
    if (this.seconds < 59) {
      this.seconds++;
    }
    else {
      this.seconds = 0;
      if (this.minutes < 59) {
        this.minutes++;
      }
      else {
        this.minutes = 0;
        this.hours++;
      }
    }
  }

  ngOnInit(): void {
  }

  click() {

    if(this.clickService.win)
    {
      this.scoreService.setNumbers(this.seconds, this.minutes, this.hours, this.numberOfClicks);
      clearInterval(this.interval);
    }

    if (this.clickService.lastClicked != 9) {
      if (!this.started) {
        this.started = true
        this.start();
      }

      if (this.paused)
        this.resume();

      this.numberOfClicks++;
    }
  }


  pause() {
    this.paused = true
    clearInterval(this.interval);
  }

  resume() {
    if (this.clickService.lastClicked != 9) {
      this.paused = false;
      this.interval = setInterval(() => {
        this.timer();
      }, 1000);
    }
  }

 

 
}
