import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interface/home'


@Injectable({
  providedIn: 'root'
})
export class HomeService {
 public dateStream = new BehaviorSubject<any>({})
 tasks:Task[] = [];

  constructor() {
    let savedTask = localStorage.getItem('tasks')
    if(savedTask) this.tasks=JSON.parse(savedTask);
    else this.tasks=[]
  {

    
   }
  }
  
  save(
    id: number,
    name: string,
    familyName: string,
    address: string,
    country: string,
    email: string,
    age: number,
    isHired: boolean
    ){
    this.tasks.push({
      id,
      name,
      familyName,
      address,
      country,
      email,
      age,
      isHired
    })
    console.log(this.tasks)
this.savaAll()
  }
  deleteTask(i:any){
    this.tasks.splice(i,1);
    this.savaAll()
  }
  editTask(i, data){
    this.tasks[i]=data;
    this.savaAll()
  }
  savaAll(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}
