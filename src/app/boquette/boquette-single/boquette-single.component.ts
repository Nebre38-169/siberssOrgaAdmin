import { Component, Input, OnInit } from '@angular/core';
import { Boquette } from 'src/app/class/boquette/boquette';

@Component({
  selector: 'app-boquette-single',
  templateUrl: './boquette-single.component.html',
  styleUrls: ['./boquette-single.component.css']
})
export class BoquetteSingleComponent implements OnInit {
  @Input() boquette : Boquette;

  constructor() { }

  ngOnInit(): void {
  }

}
