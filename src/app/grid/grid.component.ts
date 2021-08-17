import { Component, OnInit } from '@angular/core';
import { ClickService } from '../services.ts/clickService';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { WinnerDialogComponent } from '../winner-dialog/winner-dialog.component';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  numbers = [
    1, 2, 3,
    4, 5, 6,
    7, 8, 9
  ]
  constructor(private clickService: ClickService, private dialog: MatDialog) {

    //shuffle array
    for (var i = this.numbers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.numbers[i];
      this.numbers[i] = this.numbers[j];
      this.numbers[j] = temp;
  }
   }

  ngOnInit(): void {
  }

  change(event) {

    var index = Number(event.currentTarget.id);
    var emptyIndex = this.numbers.indexOf(9);

    this.clickService.lastClicked = event.target.innerText;
  
    if(emptyIndex == (index+1) || emptyIndex == (index-1) || emptyIndex==(index+3) || emptyIndex==(index-3))
    {

      var temp = this.numbers[index];
      this.numbers[index]= this.numbers[emptyIndex];
      this.numbers[emptyIndex] = temp;



    }

    /*if(this.numbers === [1,2,3,4,5,6,7,8,9])
    {
      alert("winner");
    }*/

    if(this.isSorted())
    {
      this.openDialog();
    }
   


  }

  openDialog(): void {
    this.clickService.win = true;
    const dialogRef = this.dialog.open(WinnerDialogComponent, {
      width: '250px',

    });

  }

  isSorted()
  {
    for(var i =1; i<this.numbers.length; i++)
    {
      if(this.numbers[i]-1 != this.numbers[i-1])
        return false;
    }

    return true;
  }

}
