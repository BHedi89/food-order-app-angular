import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../ui/modal/modal.component';

@Component({
  selector: 'app-header-cart-button',
  templateUrl: './header-cart-button.component.html',
  styleUrls: ['./header-cart-button.component.css']
})
export class HeaderCartButtonComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openCartModal(): void {
    this.modalService.open(ModalComponent);
  }

}
