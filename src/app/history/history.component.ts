import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [NgbCarouselConfig]
})
export class HistoryComponent {

  images = [
    {title: 'First Slide', short: 'First Slide Subtext', src: "../../assets/firstSlide.png"},
    {title: 'Second Slide', short: 'Second Slide Subtext', src: "../../assets/secondSlide.png"},
    {title: 'Third Slide', short: 'Third Slide Subtext', src: "../../assets/firstSlide.png"},
    {title: 'Fourth Slide', short: 'Fourth Slide Subtext', src: "../../assets/secondSlide.png"},

  ];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 7000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

}
