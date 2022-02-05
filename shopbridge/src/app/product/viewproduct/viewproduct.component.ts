import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private ps:ProductsService) { }

  lists:Products[]=[];

  ngOnInit(): void {
    this.ps.getproducts().subscribe(data=>{
      this.lists = data
      // console.log(data);
    })
  }

  delete(_id:any){
    window.alert("if you click ok " +_id+ " was deleted permanently")
    this.ps.deleleproduct(_id).subscribe(data=>{
      console.log(data);
      window.location.reload()
    })
  }

}
