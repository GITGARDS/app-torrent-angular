import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temp-titulo',
  templateUrl: './temp-titulo.component.html',
  styleUrls: ['./temp-titulo.component.css']
})
export class TempTituloComponent implements OnInit {

  @Input() texto = "texto";
  @Input() fs? = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
