import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from 'src/app/components/models/Education';
import { IResponse } from 'src/app/components/models/IResponse';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class EducationService extends BaseService<Education> {
  constructor(protected override http: HttpClient) {
    super(http, 'educations');
  }

  override getAll(): Observable<Education[]> {
    return super.getAll();
  }

  override getOne(id: string): Observable<IResponse<Education>> {
    return super.getOne(id);
  }

  override create(obj: Education): Observable<Education> {
    return super.create(obj);
  }

  override edit(id: string, obj: Education): Observable<Education> {
    return super.edit(id, obj);
  }

  override delete(id: string): Observable<IResponse<String>> {
    return super.delete(id);
  }
}
