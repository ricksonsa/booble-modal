import { BoobleModalService } from 'projects/booble-modal/src/public-api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  public boobleModalData: any;

  constructor(private modalService: BoobleModalService) { }

  ngOnInit() {
  }

  print() {
    console.log(this.boobleModalData.teste);
  }
  dismiss() {
    this.modalService.dismiss({ alo: 'guga viadao' });
  }

}
