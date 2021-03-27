import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListmarvelComponent } from './listmarvel/listmarvel.component';
import { CharacterComponent } from './characters/character/character.component';
import { MatCardModule } from '@angular/material/card';

import { CharactersComponent } from './characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { SomeComponent } from './some/some.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListmarvelComponent,
    CharacterComponent,
    CharactersComponent,
    SomeComponent,
    FilterPipe  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [  BsModalRef],
  bootstrap: [AppComponent],
  entryComponents: [ SomeComponent ]
})
export class AppModule { }
