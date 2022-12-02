import { Component, OnInit, Input } from "@angular/core";
import { Usuario } from "src/app/shared";

@Component({
  selector: "app-header-login-user",
  templateUrl: "./header-login-user.component.html",
  styleUrls: ["./header-login-user.component.css"],
})
export class HeaderLoginUserComponent implements OnInit {
  
  @Input() usuario: Usuario = new Usuario;

  constructor() {}

  ngOnInit(): void {
  }

}
