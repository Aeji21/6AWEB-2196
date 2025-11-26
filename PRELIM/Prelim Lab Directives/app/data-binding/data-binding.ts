import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  studentName = "Angelene Guiao ";
  score = 95;

  imageUrl = "https://picsum.photos/200";
  isDisabled = true;

  colSpanValue = 3;

  isPassing = true;

  boxColor = "purple" ;
  boxSize = "150px";
}
