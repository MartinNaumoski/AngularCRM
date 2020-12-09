import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  private routeSub!: Subscription;
  selectedFile: File;
  id = 0;
  article:any = [];
  constructor(
    private adminService: AdminServiceService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.takeArticleId();
  }
  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }
  updateArticle(){
    const formData = new FormData();
    formData.append('title', this.article.title);
    formData.append('body', this.article.body);
    formData.append('price', this.article.price);
    formData.append('address', this.article.address)
    formData.append('city', this.article.city)
    formData.append('for', this.article.for)
    formData.append('phone_number', this.article.phone_number)
    formData.append('filenames[]', this.selectedFile);
    formData.append('type', this.article.type)
    formData.append('available', this.article.available);
    
    this.adminService.editArticle(formData,this.id).subscribe(data => {
      this.toastr.info(data.Message)
    },error => {
      console.log(error)
    });
  }
  takeArticleId(){
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    }); 
    this.adminService.getArticle(this.id).subscribe(data => {
      this.article = data.Article;

    }, error => {
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
