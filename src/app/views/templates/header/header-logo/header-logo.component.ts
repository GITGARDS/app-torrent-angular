import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.css']
})
export class HeaderLogoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onFilmes(){
    this.router.navigate(['/filmes']);
  }
  onHome(){
    this.router.navigate(['/home']);
  }

}
