import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../app/admin-service.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-aricles',
  templateUrl: './aricles.component.html',
  styleUrls: ['./aricles.component.css']
})
export class AriclesComponent implements OnInit {

  tableData = []
  constructor(private adminService: AdminServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getArticles();
  }
  getArticles() {
    this.adminService.getArticles().subscribe(data => {
      this.tableData = data.Articles;
      console.log(this.tableData)
    }, error => {
    })
  }
  viewDetails(id: any) {
    this.router.navigate(['property' + '/' + id]);
  }
  deleteArticle(id: any) {
    this.adminService.deleteArticle(id).subscribe();
    this.getArticles();
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
