import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css'
})
export class UserDetailComponent implements OnInit {
  user: User | null = null;
  carregando: boolean = true;
  erro: string | null = null;

  constructor(
    private route: ActivatedRoute, // Para usar o paramMap 
    private userService: UserService,
    private cdr : ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Captura o id da URL via paramMap (Requisito obrigatório) 
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); // Converte para número 
      
      if (id) {
        this.buscarDetalhes(id);
        this.cdr.detectChanges();
      } else {
        this.erro = 'ID inválido';
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }

  buscarDetalhes(id: number) {
    this.userService.buscarUsuarioPorId(id).subscribe({
      next: (dados) => {
        this.user = dados;
        this.carregando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.erro = 'Usuário não encontrado.';  
        this.carregando = false;
        this.cdr.detectChanges();
      }
    });
  }
}