import { Component, OnInit } from '@angular/core';
import { MenuCategoryService } from '../../../services/menu-category.service';
import { DataTableResource } from '../../data-table';

@Component({
  selector: 'app-category-menu-list',
  templateUrl: './category-menu-list.component.html',
  styleUrls: ['./category-menu-list.component.css']
})
export class CategoryMenuListComponent implements OnInit {
  
  public listMenuCategorys = [];
  public isLoader:boolean;
  public itemCount:number = 0;
  public itemResource;
  public items = [];
  public error:boolean;
  public message:string;
  public limit:number = 0;


  constructor(private _menuCategoryService:MenuCategoryService) { 
     this.isLoader = true;
     this.error = false;
  }

  ngOnInit() {

  }

  public reloadItems(params?){
    this.isLoader = true;
    this.listMenuCategorys = [];
    this.items = [];

    this.itemResource = null;

    this._menuCategoryService.findAllActive().subscribe((rest:any) =>{
      this.listMenuCategorys = rest;
      this.itemCount = this.listMenuCategorys.length;
      if(this.itemCount >= 7){
        this.limit = 7;
      }else{
        this.limit = this.itemCount;
      }
      //this.itemResource = new DataTableResource(this.listMenuCategorys);
      this.itemResource = new DataTableResource(rest);
      this.itemResource.query(params).then(items =>{ 
        this.items = items;
      });
     
     
    },error => {
     this.isLoader = false;
     this.error = true;
     this.message = "Error en la petición"
    },() => {
     this.isLoader = false;
    });  
  }

  public deleted(item){
     let index = this.items.findIndex(itema => itema.idCategory == item.idCategory);
     this.items.splice(index,1);
  }

  onKey(event:any){
    let q = event.target.value;
    this.items = this.listMenuCategorys.filter((c:any) => {
      if((c.categoryName.toLowerCase().indexOf(q.toLowerCase())) > -1){
        return true;
      }return false;  
    });
  }

}
