import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Question } from 'src/app/shared/interfaces/question.interface';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent implements OnInit {
  questions: Question[] = [];
  public mainForm!: FormGroup;
  constructor(private dataService: DataService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createMainForm();
    this.questions = this.dataService.questions;
  }

  createMainForm(){
    this.mainForm = this.formBuilder.group({
      questions : new FormArray([]),
      motivation: [],
      "motivation-description": [],
      hobby:[]
    });
  }

  onSubmit(){
    console.log(this.mainForm.value);
  }

}
