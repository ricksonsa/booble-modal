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
  modalSubs: any;


  /**
   *
   */
  constructor(private modalService: BoobleModalService) {


  }

  onClick() {
    this.open();
  }

  ngOnInit(): void {
    this.open();
  }

  open() {
    if (this.modalSubs) {
      this.modalSubs.unsubscribe();
    }
    const modal = this.modalService.present(TesteComponent, { teste: 'Rennan zanibas good girl' });
    this.modalSubs = modal.onDidDismiss.subscribe(data => console.log('retorno modal', [data, modal.isDismissed]));
  }
}
