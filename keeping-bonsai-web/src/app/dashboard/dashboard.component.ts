import { Component, OnInit } from '@angular/core';

import { Bonsai } from '../bonsai';
import { BonsaiService } from '../bonsai.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    BonsaiService
  ]
})
export class DashboardComponent implements OnInit {

  bonsais: Bonsai[];

  constructor(private bonsaiService: BonsaiService) { }

  ngOnInit() {
    this.bonsais = this.bonsaiService.getBonsais();
  }

}
