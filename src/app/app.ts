import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Sistema de Gerenciamento de Usuários</h1>
      <nav>
        <a routerLink="/users" style="padding: 10px; background: #eee; text-decoration: none; border-radius: 4px;">
          Ver Lista de Usuários
        </a>
      </nav>
      <hr>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }