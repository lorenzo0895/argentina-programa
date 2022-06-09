import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/components/models/Column';
import { Education } from 'src/app/components/models/Education';
import { Experience } from 'src/app/components/models/Experience';
import { Project } from 'src/app/components/models/Project';
import { Skill } from 'src/app/components/models/Skill';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EducationService } from 'src/app/services/education/education.service';
import { ExperienceService } from 'src/app/services/experience/experience.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { SkillService } from 'src/app/services/skill/skill.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sections!: any;
  isEditable: boolean = false;

  experienceColumns: Column[] = [
    { key: 'id', isVisible: false },
    { key: 'role', shownName: 'Rol', isVisible: true, type: 'text', isTitle: true },
    { key: 'company', shownName: 'Compañía', isVisible: true, type: 'text' },
    { key: 'description', shownName: 'Descripción', isVisible: true, type: 'text' },
    { key: 'start', shownName: 'Desde', isVisible: true, type: 'date' },
    { key: 'end', shownName: 'Hasta', isVisible: true, type: 'date' },
  ];
  educationColumns: Column[] =  [
    { key: 'id', isVisible: false},
    { key: 'title', shownName: 'Título', isVisible: true, type: 'text', isTitle: true},
    { key: 'start', shownName: 'Desde', isVisible: true, type: 'date' },
    { key: 'end', shownName: 'Hasta', isVisible: true, type: 'date' },
  ];
  projectColumns: Column[] =  [
    { key: 'id', isVisible: false},
    { key: 'name', shownName: 'Título', isVisible: true, type: 'text', isTitle: true},
    { key: 'description', shownName: 'Descripción', isVisible: true, type: 'text' },
    { key: 'uri', shownName: 'URL', isVisible: true, type: 'text' },
  ];

  constructor(
    private authService: AuthService,
    private experienceService: ExperienceService,
    private educationService: EducationService,
    private projectService: ProjectService,
    private skillService: SkillService,
  ) {
    this.sections = {
      authService: {service: this.authService},
      experience: {service: this.experienceService, items: []},
      education: {service: this.educationService, items: []},
      project: {service: this.projectService, items: []},
      skill: {service: this.skillService, items: []},
    }
  }

  ngOnInit(): void {
    this.authService.isLogged.subscribe((res) => (this.isEditable = res));
    this.experienceService.getAll().subscribe((res) => (this.sections.experience.items = res));
    this.educationService.getAll().subscribe((res) => (this.sections.education.items = res));
    this.projectService.getAll().subscribe((res) => (this.sections.project.items = res));
    this.skillService.getAll().subscribe((res) => (this.sections.skill.items = res));
  }

  deleteItem(id: string, section: string) {
    this.sections[section].service.delete(id).subscribe({
      next: () => {
        this.sections[section].items = this.sections[section].items.filter((el: any) => {
          return el.id !== id;
        });
      }
    });
  }
  editItem(obj: any, section: string) {
    this.sections[section].service.edit(obj.id, obj).subscribe({
      next: () => {
        this.sections[section].items = this.sections[section].items.map((el: any) => {
          return el.id === obj.id ? obj : el;
        });
      }
    });
  }
  createItem(obj: any, section: string) {
    this.sections[section].service.create(obj).subscribe({
      next: (res: any) => {
        this.sections[section].items.push(res)
      }
    });
  }
}
