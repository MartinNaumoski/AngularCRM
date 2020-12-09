import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  selectedFile: File;
  formData = {
    title: '',
    body: '',
    price: '',
    address: '',
    city: '',
    for: '',
    phone_number: '',
    type: '',
    available: ''
  }
  error: any = '';
  errFlag: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminServiceService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {

  }
  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  createArticle() {
    const formData = new FormData();
    formData.append('title', this.formData.title);
    formData.append('body', this.formData.body);
    formData.append('price', this.formData.price);
    formData.append('address', this.formData.address)
    formData.append('city', this.formData.city)
    formData.append('for', this.formData.for)
    formData.append('phone_number', this.formData.phone_number)
    formData.append('filenames[]', this.selectedFile);
    formData.append('type', this.formData.type)
    formData.append('available', this.formData.available)

    this.adminService.createArticle(formData).subscribe(data => {
      this.errFlag  = false;
    }, error => {
      this.errFlag = true;
      this.error = error.error.message;
    })
    !this.errFlag ? this.toastr.success('You created article!', 'Success!') : '';
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
