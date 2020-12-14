import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../app/admin-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-aricles',
  templateUrl: './aricles.component.html',
  styleUrls: ['./aricles.component.css']
})
export class AriclesComponent implements OnInit {

  tableData: any = [];
  searchTerm = '';
  allTableData: any = [];

  constructor(
    private adminService: AdminServiceService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getArticles();
  }
  getArticles() {
    this.adminService.getArticles().subscribe(data => {
      this.tableData = data.Articles;
      console.log(data)
      this.allTableData = this.tableData;
    }, error => {
    })
  }
  filterARticles() {
    let tempTableData: any = [];
    this.allTableData.forEach((element: any) => {
      if (element.title.toLowerCase().includes(this.searchTerm.toLocaleLowerCase())
        || element.city.toLowerCase().includes(this.searchTerm.toLocaleLowerCase())
        || element.type.toLowerCase().includes(this.searchTerm.toLocaleLowerCase())
        || element.phonenumber.toLowerCase().includes(this.searchTerm.toLowerCase())
        || element.address.toLowerCase().includes(this.searchTerm.toLocaleLowerCase())) {
        tempTableData.push(element);
      }
    });
    this.searchTerm.length == 1 ? this.tableData = this.allTableData : this.tableData = tempTableData;
  }
  viewDetails(id: any) {
    this.router.navigate(['property' + '/' + id]);
    window.open('property/' + id, "_blank")
  }
  deleteArticle(id: any) {
    this.toastr.success('You deleted article!', 'Success!'); 
    this.adminService.deleteArticle(id).subscribe(data => {
      console.log(data)
      this.getArticles();
    });
    // window.location.reload();
  }

  editArticle(id: any) {
    this.router.navigate(['edit-article/' + id]);
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
