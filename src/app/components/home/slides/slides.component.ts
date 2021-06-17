import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {
  images = ['../../../../assets/access/1.JPG', '../../../../assets/access/2.JPG',
  '../../../../assets/access/3.JPG', '../../../../assets/access/4.JPG'];


  constructor(config: NgbCarouselConfig ) {
     // customize default values of carousels used by this component tree
     config.interval = 3000;
     config.wrap = true;
     config.keyboard = false;
     config.pauseOnHover = false;
   }

  ngOnInit() {
  }

}
