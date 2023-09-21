import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../shared/interfaces/comment';
import { Observable } from 'rxjs';
import { URLAPI } from '../shared/variable';
import { FormGroup } from '@angular/forms';
import { Dish } from '../shared/interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(URLAPI + '/comments');
  }
  getCommentById(id: number): Observable<Comment> {
    return this.http.get<Comment>(URLAPI + '/comments' + id);
  }
  // j'envoi à spring objet'{non ....} du formgroup, avec son endpoint au click
  postComment(object: FormGroup): Observable<Comment> {
    return this.http.post<Comment>(URLAPI + '/comments', object.value);
  }
  //La requete renvoie une  methode delete qui prend en parametre un id de type number,
  //  return une reponse protocole http avec la variable URI + id
  deleteComment(id: number): Observable<any> {
    return this.http.delete<any>(URLAPI + '/comments/' + id);
  }
  putComment(id: number, comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(URLAPI + '/comments/' + id, comment);
  }

  // création requetes protocle http pour mettre en relation avec le back avec les uri.
  // sur l'URI je veux la methode Get
  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(URLAPI + '/dishes');
  }
  getDishById(id: number): Observable<any> {
    return this.http.get<any>(URLAPI + '/dishes/' + id);
  }
  postDish(object: object): Observable<any> {
    return this.http.post<any>(URLAPI + '/dishes', object);
  }

  deleteDish(id: number): Observable<any> {
    return this.http.delete<any>(URLAPI + '/dishes/' + id);
  }

  putDish(id: number, object: FormGroup): Observable<any> {
    return this.http.put<any>(URLAPI + '/dishes/' + id, object.value);
  }

  getIngredients(): Observable<any> {
    return this.http.get<any>(URLAPI + '/ingredients');
  }

  postIngredient(id: number, object: FormGroup): Observable<any> {
    return this.http.post<any>(URLAPI + '/ingredients' + id, object.value);
  }
  getTypes() {
    return this.http.get<any>(URLAPI + '/types');
  }
}
