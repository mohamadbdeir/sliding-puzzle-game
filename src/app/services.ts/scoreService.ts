import { TOUCH_BUFFER_MS } from "@angular/cdk/a11y";
import { Injectable } from "@angular/core";

@Injectable()
export class ScoreService
{
    seconds: number;
    minutes: number;
    hours: number;

    moves: number;

    setNumbers(seconds: number, minutes: number, hours:number, moves: number)
    {
        this.seconds = seconds;
        this.minutes = minutes;
        this.hours = hours;
        this.moves = moves;
    
    }
}