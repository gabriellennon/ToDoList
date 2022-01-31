import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/models.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //VARIABLES
  listTasks: Task[] = [];
  showDescription: boolean = false;

  //FORMS
  public taskForm: FormGroup = new FormGroup({
    taskInpt: new FormControl('',  [Validators.required]),
    taskDescription: new FormControl(''),
  })

  constructor(
    private router: Router,
  ) { }

  //FUNCTIONS
  ngOnInit(): void {
  }

  addNewTask(){
    const valueFormInpt = this.taskForm.get('taskInpt').value;
    const valueFormDescription = this.taskForm.get('taskDescription').value;
    //Caso o formulário esteja válido e se não estiver vazio
    if(this.taskForm.valid && valueFormInpt !== ''){
      this.listTasks.push({
        id: this.listTasks.length,
        title: valueFormInpt,
        description: valueFormDescription
      })
      console.log(this.listTasks)
      this.resetForm();

    }else {

    }
  }

  removeTask(index: number){
    console.log(index)
    this.listTasks = this.listTasks.filter(e => e.id !== index);
  }

  resetForm(){
    this.taskForm.patchValue({
      taskInpt: '', 
      taskDescription: ''
    })
  }

  logOut(){
    this.router.navigate(['/login'])
  }

  withDescription(){
    this.showDescription = !this.showDescription;
  }

}
