import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterService } from './Service/master.service';
import { Iactivation_steps } from './Interface/activation_steps';
import { Observable } from 'rxjs';
import { Iinbox_list } from './Interface/inbox_list';
import { Ixray_triggers } from './Interface/x_rays_triggers';
import e from 'express';
import { Idata } from './Interface/data';
import { Ianalytic_card } from './Interface/top_analytics_cards';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  providers: [MasterService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,AfterViewInit {
  
constructor(private service:MasterService){}
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    this.getData()
  }

data: any = {}

 analytics_cards:any = {};
 activation_steps:any = []; 
 x_rays_triggers:any = []; 
 inbox_list:any = []; 



getData(){
  try {
    this.service.getData().then(res=> {
      this.data = res.data;
      console.log(this.data)
      this.analytics_cards = this.data.top_analytics_cards;
      this.activation_steps = this.data.activation_steps;
      this.x_rays_triggers = this.data.x_rays_triggers;
      this.inbox_list = this.data.inbox_list;
      console.log(this.analytics_cards,this.activation_steps,this.x_rays_triggers,this.inbox_list)

      
    });

  } catch (e) {
    console.log(e)
  }
  
}


}
