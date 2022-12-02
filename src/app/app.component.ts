import { Component, OnInit } from "@angular/core";
import { EventEmitterService } from "./shared";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "app-torrent-angular";

  ngOnInit(): void {
  }
}
