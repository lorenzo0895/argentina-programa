import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss']
})
export class RoundButtonComponent implements OnInit {

  @Input() type: 'edit' | 'add' | 'delete' = 'edit';
  @Input() backgroundColor: string = '#35bbec';
  @Input() color: string = 'white';
  
  constructor() { }

  ngOnInit(): void {
  }

}
