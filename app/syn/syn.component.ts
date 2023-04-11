import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-syn',
  templateUrl: './syn.component.html',
  styleUrls: ['./syn.component.css']
})
export class SynComponent {
  @Input() zmiennaImport!: string[];

  @Output() odpowiedz = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  wyslanie() {
    this.odpowiedz.emit('Bede czekal');
  }
}
