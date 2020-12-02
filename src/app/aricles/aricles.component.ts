import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../app/admin-service.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-aricles',
  templateUrl: './aricles.component.html',
  styleUrls: ['./aricles.component.css']
})
export class AriclesComponent implements OnInit {

  tableData = [];
  searchTerm = '';
  allTableData:any = [];

  constructor(private adminService: AdminServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getArticles();
  }
  getArticles() {
    this.adminService.getArticles().subscribe(data => {
      this.tableData = data.Articles;
      this.allTableData = this.tableData;
    }, error => {
    })
  }
  filterARticles(){
    let tempTableData:any= [];
     this.allTableData.forEach(element => {
       console.log(element)
        if(element.title.includes(this.searchTerm) 
        || element.city.includes(this.searchTerm) 
        || element.type.includes(this.searchTerm) 
        || element.phonenumber.includes(this.searchTerm)
        || element.address.includes(this.searchTerm)){
          tempTableData.push(element);
        }
     });
     this.searchTerm.length == 1 ? this.tableData = this.allTableData : this.tableData = tempTableData;
  }
  viewDetails(id: any) {
    this.router.navigate(['property' + '/' + id]);
    window.open('property/'+id,"_blank")
  }
  deleteArticle(id: any) {
    this.adminService.deleteArticle(id).subscribe();
    this.getArticles();
  }
  editArticle(id:any){
    this.router.navigate(['edit-article/'+id]);
  }
  toogleSideBar(event: any) {
    let sideBar = document.getElementById("mySidebar");
    let adminPanel = document.getElementById("adminPanel");

    if (sideBar != null && adminPanel != null) {
      if (sideBar.classList.contains("animation-in")) {
        sideBar.classList.add("animation-out");
        sideBar.classList.remove("animation-in");
        adminPanel.style.display = "none";
      }
      else {
        sideBar.classList.add("animation-in");
        sideBar.classList.remove("animation-out");
        adminPanel.style.display = "block";
      }
    }
  }
}
