import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header-menu",
  templateUrl: "./header-menu.component.html",
  styleUrls: ["./header-menu.component.css"],
})
export class HeaderMenuComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onHome() {
    this.router.navigate(["/home"]);
  }
  onLogin() {
    this.router.navigate(["/login", "logar"]);
  }
  onFilmes() {
    this.router.navigate(["/filmes"]);
  }
}
