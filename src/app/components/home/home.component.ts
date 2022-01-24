import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  taskId;
  task


  constructor(
    public homeSer: HomeService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.homeSer.tasks
  }

  ngOnInit(): void {
    this.taskId=this.route.snapshot.paramMap.get('id')
  }
  deleteTask(i:any){
    this.homeSer.deleteTask(this.taskId);

  }

}
