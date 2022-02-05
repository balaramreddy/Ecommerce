import { Component, OnInit } from '@angular/core';
import {  NgForm} from '@angular/forms';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  
  constructor(private ps:ProductsService){}
  ngOnInit(): void {}

  save(productForm:NgForm){
    const newdata ={
      productName :productForm.value.productName,
      description:productForm.value.description,
      productImg:productForm.value.productImg,
      price:productForm.value.price,
      rating:productForm.value.rating
    }
    this.ps.addproduct(newdata).subscribe((data:any) =>{
      console.log(data);
    })
    // console.log(productForm.value);
    productForm.reset();
  }
  resetform(productForm:NgForm){
    productForm.reset();
  }

}
