import { Injectable } from '@angular/core';
import { QuestionType } from '../shared/enums/question-type.enum';
import { Question } from '../shared/interfaces/question.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  questions: Question[] = [
    {
      type: QuestionType.Text,
      description: 'Enter your name',
    },
    {
      type: QuestionType.Radio,
      description: 'Select your gender',
      options: ['Male', 'Female', 'Others'],
    },
    {
      type: QuestionType.Dropdown,
      description: 'Select your state',
      options: [
        'Telangana',
        'Andhra Pradesh',
        'Kerala',
        'Tamil Nadu',
        'Karnataka',
        'Maharashtra',
      ],
    },
    {
      type: QuestionType.Dropdown,
      description: 'Select your District',
      options: [
        'Rangareddy',
        'Sangareddy',
        'Hyderabad',
        'Medak',
        'Warangal',
        'Nizamabad',
        'Nalgonda',
        'Adilabad'
      ],
    },
    {
      type: QuestionType.Checkbox,
      description: 'Opt for your subjects',
      options: [
        'Mathematics',
        'English',
        'Biology',
        'Physics',
        'Chemistry',
      ],
    }
  ];
  constructor() {}
}
