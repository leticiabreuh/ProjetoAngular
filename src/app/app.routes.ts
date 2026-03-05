import { Routes } from '@angular/router';
import { UsersListComponent } from './pages/users-list/users-list';
import { UserDetailComponent } from './pages/user-detail/user-detail'; 

export const routes: Routes = [
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: UserDetailComponent }, // Rota dinâmica 
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];