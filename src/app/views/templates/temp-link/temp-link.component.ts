import { Component, OnInit, Input } from "@angular/core";
import { Filme_Links } from "src/app/shared";

@Component({
  selector: "app-temp-link",
  templateUrl: "./temp-link.component.html",
  styleUrls: ["./temp-link.component.css"],
})
export class TempLinkComponent implements OnInit {
  @Input() texto: Filme_Links[] = [];

  constructor() {}

  ngOnInit(): void {}

  onClick(item: any) {
    window.location.href = item;
  }
}
