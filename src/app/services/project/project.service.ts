import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IResponse } from "src/app/components/models/IResponse";
import { Project } from "src/app/components/models/Project";
import { BaseService } from "../base.service";

@Injectable({
  providedIn: "root",
})
export class ProjectService extends BaseService<Project> {
  constructor(protected override http: HttpClient) {
    super(http, "projects");
  }

  override getAll(): Observable<Project[]> {
    return super.getAll();
  }

  override getOne(id: string): Observable<IResponse<Project>> {
    return super.getOne(id);
  }

  override create(obj: Project): Observable<Project> {
    return super.create(obj);
  }

  override edit(id: string, obj: Project): Observable<Project> {
    return super.edit(id, obj);
  }

  override delete(id: string): Observable<IResponse<String>> {
    return super.delete(id);
  }
}
