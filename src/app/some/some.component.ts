import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';;

@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.scss']
})
export class SomeComponent implements OnInit {

  //Son las variables que asignare
  title;
  modified;
  constructor(
    public modalRef: BsModalRef
  ) { }

  ngOnInit(): void {
  }

}
