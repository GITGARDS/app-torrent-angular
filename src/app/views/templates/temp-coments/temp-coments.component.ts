import { Component, OnInit, Input } from '@angular/core';
import { Filme_Comentarios } from 'src/app/shared';

@Component({
  selector: 'app-temp-coments',
  templateUrl: './temp-coments.component.html',
  styleUrls: ['./temp-coments.component.css']
})
export class TempComentsComponent implements OnInit {

  @Input() coment: Filme_Comentarios = new Filme_Comentarios();

  constructor() { }

  ngOnInit(): void {
  }

}
