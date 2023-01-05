import { Component, OnInit } from '@angular/core';
import { LogIn } from '../models/logIn.model';
import { NgProxyService } from '../services/ng-proxy.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  hide = true;
  logIn:LogIn = new LogIn();
  constructor(private proxy:NgProxyService) { }

  ngOnInit(): void {
  }
  onLogInBtnClick(){
    this.proxy.logIn(this.logIn).subscribe((respose:any) =>{
      console.log(respose);
      this.logIn = new LogIn();
    })
  }
}
