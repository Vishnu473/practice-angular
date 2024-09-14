import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { KebabPipePipe } from '../custom-pipe.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    SlicePipe,
    KebabPipePipe,
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  user: string = 'vishnu';
  user1: string = 'KISHORE';
  number1: number = 12345;
  number2: number = 1908982345.6789;
  attendancePercent: number = 0.98;
  cost: number = 345678;
  birthday = new Date(2001, 7, 29);
  obj: object = {
    name: 'Vishnu Kishore Tarini',
    age: 23,
    city: 'Vijayawada',
  };
}
