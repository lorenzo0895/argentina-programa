import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/components/models/Experience';
import { IResponse } from 'src/app/components/models/IResponse';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService extends BaseService<Experience> {
  constructor(protected override http: HttpClient) {
    super(http, 'experiences');
  }

  override getAll(): Observable<Experience[]> {
    return super.getAll();
  }

  override getOne(id: string): Observable<IResponse<Experience>> {
    return super.getOne(id);
  }

  override create(obj: Experience): Observable<Experience> {
    return super.create(obj);
  }

  override edit(id: string, obj: Experience): Observable<Experience> {
      return super.edit(id, obj);
  }

  override delete(id: string): Observable<IResponse<String>> {
    return super.delete(id);
  }

}
