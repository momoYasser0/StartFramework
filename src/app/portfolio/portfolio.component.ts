import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgs: string[] = ['assets/imgs/port1.png', 'assets/imgs/port2.png', 'assets/imgs/port3.png', 'assets/imgs/port1.png', 'assets/imgs/port2.png', 'assets/imgs/port3.png']
  mainImage: string = '';
  showImage: boolean = false;

  imgURL(img: string) {

    this.showImage = true;
    this.mainImage = img;

  }
  hideImage() {
    this.showImage = false;
  }

}
