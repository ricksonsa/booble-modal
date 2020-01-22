import { TesteComponent } from './teste/teste.component';
import { Component, OnInit } from '@angular/core';
import { BoobleModalService } from 'projects/booble-modal/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'booble-modal';


  /**
   *
   */
  constructor(private modalService: BoobleModalService) {


  }

  ngOnInit(): void {
    var modal = this.modalService.present(TesteComponent, { teste: 'Rennan zanibas good girl' });
  }
}
