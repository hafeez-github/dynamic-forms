import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { QuestionType } from 'src/app/shared/enums/question-type.enum';
import { Question } from 'src/app/shared/interfaces/question.interface';

@Component({
  selector: 'app-form-component-generator',
  templateUrl: './form-component-generator.component.html',
  styleUrls: ['./form-component-generator.component.scss'],
})
export class FormComponentGeneratorComponent implements OnChanges{
  @Input() id!: number;
  @Input() question!: Question;
  @Input() mainForm!: FormGroup;
  questionControl!:FormControl;
  
  questionType = {
    text: QuestionType.Text,
    dropdown: QuestionType.Dropdown,
    checkbox: QuestionType.Checkbox,
    radio: QuestionType.Radio,
  };

  constructor(){}

  ngOnChanges(change:SimpleChanges):void {
    if(change['question'].currentValue){
      this.questionControl = new FormControl();
      (this.mainForm.get('questions') as FormArray).push(this.questionControl);
    }
  }
}
