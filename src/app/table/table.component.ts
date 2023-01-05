import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgProxyService } from '../services/ng-proxy.service';

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './dialog-elements-example-dialog.html',
})
export class DialogElementsExampleDialog {}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'delete','update'];
  dataSource = [];


  constructor(private proxy:NgProxyService,
    public dialog: MatDialog){}


    ngOnInit(): void {
        this.getTableData()
    }

    openDialog() {
      this.dialog.open(DialogElementsExampleDialog);
    }
  
    getTableData(){
      this.proxy.getAllServices().subscribe((response:any)=>{
        console.log(response)
          this.dataSource = response.data
        })
    }

  onDeleteServiceBtnClick(id:number){
    this.proxy.deleteService(id).subscribe((respose:any)=> {
      if(respose)
      this.getTableData();
    })
  }



}
