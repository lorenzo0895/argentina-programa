import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  @Input() isEditable: boolean = false;
  @Input() text: string = '';
  @Input() status: number = 0;
  @Input() width: number = 104;
  @Input() stroke: number = 5;
  @Input() strokeColor: string = '#35bbec';
  @Input() isMock: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
