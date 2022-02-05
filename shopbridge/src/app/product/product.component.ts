import { Component, OnInit } from '@angular/core';
import { Products } from './products';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productlist:Products[]=[]
  constructor(private ps:ProductsService) { }

  ngOnInit(): void {
    this.ps.getproducts().subscribe(data =>{
      this.productlist = data
      console.log(data);
    })
  }

}
