import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export abstract class CommonRequest {
  private api = 'https://jsonplaceholder.typicode.com';
  private headers = new Headers({ 'Accept': 'application/json' });
  private curr: Observable<any[]>;

  constructor(private http: Http, private resource: string) {}

  public getResource(path = ''): Observable<any[]> {
    if (this.curr) { return this.curr; }
    return this.curr = this.http
        .get(`${this.api}/${this.resource}/${path}`)
        .share()
        .delay(2000)
        .map(res => res.json())
        .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
      console.error(`An error ocurred stack`, error);
      return Observable.throw(error.message);
  }

}
