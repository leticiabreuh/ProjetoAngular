import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // URL da API pública definida no objetivo do projeto
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; 

  constructor(private http: HttpClient) { }

  // Retorna a lista para a tela /users 
  listarUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  // Retorna o detalhe para a tela /users/:id 
  buscarUsuarioPorId(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}