import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './character/shared/characters-api.service';
import { Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SomeComponent } from '../some/some.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

character: String;
template: String;
modalRef: BsModalRef; 
filtro= '';

  constructor(
    private characterSvc: CharactersApiService,
    private modalService: BsModalService
    ) { }

  allCharacters: Observable<any>;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this.characterSvc.getAllCharacters();
  }
  openModal(name: string, modified: string,resourceURI: string,id : string, series: string, comics: string) {
    this.modalRef = this.modalService.show(SomeComponent,  {
      initialState: {
        //para poder usarlo
        title: name,
        modified: modified,
        resourceURI: resourceURI,
        id: id,
        comics: comics,
        series: series 
      }
    });
  }
  
}
