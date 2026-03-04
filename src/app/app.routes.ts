import { Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list';
import { UserDetailComponent } from './pages/user-detail/user-detail'; // Adicione esta linha

export const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserDetailComponent }, // Rota dinâmica [cite: 7, 40]
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];