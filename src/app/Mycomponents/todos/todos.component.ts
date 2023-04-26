import { Component,OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent  {

todos:Todo[];
constructor(){
  this.todos =[
    {
      sno:1,
      title:"hits" ,
      desc : "string" ,
      active: true
  },{
    sno:2,
    title:"shaa" ,
    desc : "string" ,
    active: false
},{
  sno:3,
  title:"mohit" ,
  desc : "string" ,
  active: true
}
  ]
}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  deletetodo(todo:Todo){
    console.log(todo)
    // Intl =this.todos.indexOf(todo); 
    console.log(this.todos.indexOf(todo))
    this.todos.splice(this.todos.indexOf(todo),1);
  }
}
