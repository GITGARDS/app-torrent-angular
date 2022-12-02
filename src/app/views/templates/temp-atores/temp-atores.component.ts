import { Component, OnInit, Input } from "@angular/core";
import { Filme_Atores } from "src/app/shared";

@Component({
  selector: "app-temp-atores",
  templateUrl: "./temp-atores.component.html",
  styleUrls: ["./temp-atores.component.css"],
})
export class TempAtoresComponent implements OnInit {
  
  @Input() texto: Filme_Atores[] = [];

  constructor() {}

  ngOnInit(): void {}
}
