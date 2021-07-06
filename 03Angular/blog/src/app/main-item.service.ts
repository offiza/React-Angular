import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MainItem } from './mainItem';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})

export class MainItemService {
  private baseUrl = 'http://localhost:4201/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getArticles() : Observable<MainItem[]>{
    return this.http.get<MainItem[]>(this.baseUrl + "articles")
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<MainItem[]>('getHeroes', []))
    );
  }

  getArticleById(id: number): Observable<MainItem> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.get<MainItem>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<MainItem>(`getHero id=${id}`))
    );
  }

  postArticle(article: any){
    const url = this.baseUrl + "post-article";
    return this.http.put<any>(url, article);
  }

  getNextArticleId() : Observable<any>{
    const url = this.baseUrl + "next-article-id";
    return this.http.get<any>(url);
  }

  postComment(comment: any) : Observable<any>{
    const url = this.baseUrl + "post-comment";
    return this.http.put<any>(url, comment);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`MainItem: ${message}`);
  }
}
