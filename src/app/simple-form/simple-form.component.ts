import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput [(ngModel)]="message" type="text" [ngStyle]="{color: 'white', 'background-color': 'blue'}"/>
      <button (click)="update.emit({text: message})">点击</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  @Input() message: string;
  @Output() update = new EventEmitter<{text: string}>();
  constructor() { }

  ngOnInit() {
  }
  getInputValue(value: string) {
    console.log(value);
    console.log(this.message);
  }
  onEnter(value: string, e: Event) {
    console.log(value);
    console.log(e);
  }
}
