import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IResponse } from "../components/models/IResponse";

@Injectable({
  providedIn: "root",
})
export abstract class BaseService<T> {
  constructor(protected http: HttpClient, @Inject(String) private readonly uri: string) {
    this.http = this.http;
    this.uri = environment.API_URI + uri;
  }

  getAll(): Observable<T[]> {
    return <Observable<T[]>>this.http.get<IResponse<T>>(this.uri).pipe(
      map((res: any) => {
        return (res.status === 'success' ? res.response : []);
      }),
    );
  }

  getOne(id: string): Observable<IResponse<T>> {
    return <Observable<IResponse<T>>>this.http.get(this.uri + "/" + id);
  }

  create(obj: T): Observable<T> {
    return <Observable<T>>this.http.post(this.uri, obj).pipe(
      map((res:any) => {
        return res.status === 'success' ? res.response : undefined;
      })
    );
  }

  edit(id: string, obj: T): Observable<T> {
    return <Observable<T>>this.http.patch(this.uri + "/" + id, obj);
  }

  delete(id: string): Observable<IResponse<String>> {
    return <Observable<IResponse<String>>>this.http.delete(this.uri + "/" + id);
  }

}
