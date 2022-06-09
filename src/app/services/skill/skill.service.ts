import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/components/models/IResponse';
import { Skill } from 'src/app/components/models/Skill';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService extends BaseService<Skill> {
  constructor(protected override http: HttpClient) {
    super(http, 'skills');
  }
  
  override getAll(): Observable<Skill[]> {
    return super.getAll();
  }

  override getOne(id: string): Observable<IResponse<Skill>> {
    return super.getOne(id);
  }

  override create(obj: Skill): Observable<Skill> {
    return super.create(obj);
  }

  override edit(id: string, obj: Skill): Observable<Skill> {
    return super.edit(id, obj);
  }

  override delete(id: string): Observable<IResponse<String>> {
    return super.delete(id);
  }
}
