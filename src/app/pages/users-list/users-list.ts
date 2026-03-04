import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users-list.html', // Note que aqui removemos o '.component' do nome
  styleUrl: './users-list.css'      // Note que aqui também removemos o '.component'
})
export class UsersListComponent implements OnInit {
  usuarios: User[] = [];
  carregando: boolean = true;
  erro: string | null = null;

  constructor(
  private userService: UserService,
  private cd: ChangeDetectorRef // Injeção do detector de mudanças
) {}

 ngOnInit(): void {
  this.userService.listarUsuarios().subscribe({
    next: (dados) => {
      this.usuarios = dados;
      this.carregando = false;
      
      // FORÇAR A ATUALIZAÇÃO DA TELA AGORA
      this.cd.detectChanges(); 
    },
    error: (err) => {
      console.error(err);
      this.carregando = false;
      this.cd.detectChanges();
    }
  });
}
}