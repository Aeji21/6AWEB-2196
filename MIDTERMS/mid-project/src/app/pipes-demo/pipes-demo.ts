import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, I18nPluralPipe, I18nSelectPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe}from '@angular/common';
import { Component } from '@angular/core';
import { map, Observable, interval } from 'rxjs';


@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, AsyncPipe, CurrencyPipe, SlicePipe, DecimalPipe, TitleCasePipe, I18nPluralPipe, I18nSelectPipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();

    time$: Observable<Date> = interval(1000).pipe(
    map(() => new Date())
    );
    price: number = 20000;

    fruits: string[] = [
    'Apple',
    'Orange',
    'Grapes',
    'Mango',
    'Kiwi',
    'Pomegranate'
  ];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  titleText: string = 'angular built in pipes demo';

   messageCount: number = 3;
  messageMapping: { [key: string]: string } = {
    '=0': 'No messages',
    '=1': 'One message',
    'other': '# messages'
  };

  userGender: string = 'female';
  genderMapping: { [key: string]: string } = {
    male: 'He is online',
    female: 'She is online',
    other: 'They are online'
  };

};
