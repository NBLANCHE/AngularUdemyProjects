import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid/main";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {

  // gridOptions: GridOptions;
  columnDefs: any[];
  rowData: any[];

  constructor() {
    // this.gridOptions = <GridOptions>{};

    this.columnDefs = [
            {headerName: "Make", field: "make"},
            // {headerName: "Model", field: "model", cellRendererFramework: RedComponentComponent},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}
        ];

      this.rowData = [
          {make: "Toyota", model: "Celica", price: 35000},
          {make: "Ford", model: "Mondeo", price: 32000},
          {make: "Porsche", model: "Boxter", price: 72000}

      ];

  }

  // onGridReady(params){
  //   params.api.sizeColumnsToFit();
  // }

  // selectAllRows(){
  //   this.gridOptions.api.selectAll();
  // }
  // constructor() { }

}
