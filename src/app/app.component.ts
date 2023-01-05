import { Component, OnInit } from '@angular/core';
import { NgProxyService } from './services/ng-proxy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lesson-33-Angular';

  constructor(private proxy:NgProxyService){}


    ngOnInit(): void {
      
    }


}
