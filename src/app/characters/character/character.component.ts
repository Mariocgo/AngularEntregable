import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  title: "google-maps";

  constructor() { }

  ngOnInit(): void {
    let loader = new Loader({
      apiKey:'AIzaSyAqeAxQVjfdP-8MqYcAgQZZTcgDvV6Ef2M'
    })

    loader.load().then(() => {
      new google.maps.Map(document.getElementById("map"),{
        center: { lat: 21.0130076, lng:-89.6901324},
        zoom:12
      })
    })

  }

}
