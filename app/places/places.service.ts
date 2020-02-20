import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  // tslint:disable-next-line: variable-name
  private _places: Place[] = [

      new Place('a1',
                  'gandhinagar',
                  'xyz' ,
                  'its good kinda',
                  './assets/image/Mama_instant_noodle_block.jpg', 212),
      new Place('a2',
                  'surat',
                  'abc' ,
                  'its good may be',
                  './assets/image/Mama_instant_noodle_block.jpg', 212),
      new Place('a3',
                  'abad',
                  'abc' ,
                  'its good may be',
                  './assets/image/Mama_instant_noodle_block.jpg', 212)
  ];

  get Places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
