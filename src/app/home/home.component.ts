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
  public traiCay2 = [{ ten: 'Tao', gia: 12, hagia: true }, { ten: 'Nho', gia: 20, hagia: false }];

  public vietnamData = [{ city: "chon thanh pho", district: ['Quan huyen'] }, { city: "AnGiang", district: ["Thành phố Long Xuyên", "Thành phố Châu Đốc", "Thị xã Tân Châu", "Huyện An Phú", "Huyện Châu Phú", "Huyện Châu Thành", "Huyện Chợ Mới", "Huyện Phú Tân", "Huyện Thoại Sơn", "Huyện Tịnh Biên", "Huyện Tri Tôn"] }, { city: "Bà Rịa - Vũng Tàu", district: ["Thành phố Vũng Tàu", "Thị xã Bà Rịa", "Thị xã Phú Mỹ", "Huyện Châu Đức", "Huyện Côn Đảo", "Huyện Đất Đỏ", "Huyện Long Điền", "Huyện Tân Thành", "Huyện Xuyên Mộc"] }];

  public districts: string[] = [];

  constructor() {

  }
  public ngOnInit(): void {
    console.log('cities ', this.vietnamData);
  }

  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }

  public changeCity(event: any) {
    const city = event.target.value;
    if (!city) {
      return;
    }
    //c1
    // const search = this.vietnamData.filter(data => data.city === city);
    // console.log('search', search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }
    //c2
    this.districts = this.vietnamData.find(data => data.city === city)?.district || [];
  }
}
