import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ApiService) {}
  
  count:any= 0


  ngOnInit(): void {
    this.api.cartCount.subscribe((res:any)=>{
      this.count=res
      console.log(this.count);
    })
  }
}
