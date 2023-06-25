import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Long';
  public age = 15;
  public traiCay = ['Tao', 'Nho'];
  public traiCay2 = [{ ten: 'Tao', gia: 12 }, { ten: 'Nho', gia: 20 }];

  constructor() {

  }
  public ngOnInit(): void {
    console.log('trai cay =', this.traiCay);
  }

  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }
}
