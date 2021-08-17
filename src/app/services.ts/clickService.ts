import { Injectable } from "@angular/core";

@Injectable()
export class ClickService
{
    lastClicked: number;
    win:boolean = false;
}