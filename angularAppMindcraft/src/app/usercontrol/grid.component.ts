import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html'
})

export class GridComponent {
    @Input("grid-title")
    gridTitle : string = "";

    gridData: Array<any> = new Array<any>();

    gridCols: Array<any> = new Array<any>();

    @Input("grid-data")
    set gridDataSet(_gridData:Array<any>) {
      if (_gridData.length > 0) {
        if (this.gridCols.length == 0) {
          var colnames = Object.keys(_gridData[0]);
          for (var index in colnames) {
            this.gridCols.push(colnames[index]);
            console.log(index + " = " +colnames[index])
          }
        }
      }
      this.gridData = _gridData;
      console.log(this.gridData);
    }

    @Output("grid-selected")
    eventemitter:EventEmitter<any>=new EventEmitter<any>();
    selectedRecord(_selectedobj:any){
        console.log(_selectedobj)
        this.eventemitter.emit(_selectedobj);
    }
 }
