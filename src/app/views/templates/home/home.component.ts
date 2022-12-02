import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventEmitterService } from "src/app/shared";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onFilmes() {
    this.router.navigate(["/filmes"]);
  }

  onLogin() {
    this.router.navigate(["/login", "logar"]);
  }
}
