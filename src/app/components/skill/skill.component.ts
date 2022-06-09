import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../models/Skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() isEditable: boolean = false;
  @Input() skills: Skill[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
