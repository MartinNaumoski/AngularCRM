import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  selectedFile:File;

  formData = {
    title: '',
    body: '',
    price: 0,
    address: '',
    city: '',
    for: '',
    phone_number: '',
    filenames:[],
    type:'',
    avalible:''
  }
  constructor(private adminService : AdminServiceService) { }

  ngOnInit(): void {
  } 
  onFileChanged(event:any) {
    //this.formData.filenames.push(event.target.files[0]);
    console.log(event.target.files[0])
  }
  createArticle(){
    console.log(this.formData)
    this.adminService.createArticle(this.formData).subscribe(data => {

    },error => {
      console.log(error)
    })
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
