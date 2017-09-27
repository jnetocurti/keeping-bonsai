import { Injectable } from '@angular/core';

import { Bonsai } from './bonsai';

@Injectable()
export class BonsaiService {

  constructor() { }

  getBonsais(): Bonsai[] {
    return [{
      common_name: "Jaboticabeira",
      scientific_name: "Plinia cauliflora",
      origin: "Semente",
      origin_date: "String",
      planting_date: "String"
    }, {
      common_name: "Ipê-amarelo",
      scientific_name: "Handroanthus albus",
      origin: "Semente",
      origin_date: "String",
      planting_date: "String"
    }, {
      common_name: "Ipê-roxo",
      scientific_name: "Handroanthus impetiginosus",
      origin: "Semente",
      origin_date: "String",
      planting_date: "String"
    }];
  }

}
