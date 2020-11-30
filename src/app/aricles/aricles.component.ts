import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../app/admin-service.service'
@Component({
  selector: 'app-aricles',
  templateUrl: './aricles.component.html',
  styleUrls: ['./aricles.component.css']
})
export class AriclesComponent implements OnInit {

  tableData = []
  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.getArticles().subscribe(data => {
      this.tableData = data.Articles;
      console.log(this.tableData)
    },error => {
      console.log("Ova e errorot: " );
      console.log(error)
    })
  }
  toogleSideBar(event: any) {
    let sideBar = document.getElementById("mySidebar");
    if (sideBar != null) {
      if (sideBar.classList.contains("animation-in")) {
        sideBar.classList.add("animation-out");
        sideBar.classList.remove("animation-in");
      }
      else {
        sideBar.classList.add("animation-in");
        sideBar.classList.remove("animation-out");
      }
    }
  }
}
