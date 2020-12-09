import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { AdminServiceService } from '../../app/admin-service.service'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactData: any;
  allContactData:any = [];
  searchTerm:any = '';

  constructor(
    private adminService: AdminServiceService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.adminService.getContacts().subscribe(data => {
      console.log(data)
      this.contactData = data["Contact-Us"];
      this.allContactData = this.contactData;
    })
  }
  viewDetails(id: any) {
    this.router.navigate(['contact' + '/' + id]);
  }
  deleteContact(id: any) {
    //this.adminService.deleteContact(id).subscribe(data => {
      //this.toastr.success('You deleted contact!', 'Success!')
    //});
    alert("NE JA POVIKVI POSO EDNA E SAMO KE TI SE IZBRISHIT!");
    alert("INACE NAPRAENO SI E SVE!");
  }
  filterContacts() {
    let tempTableData: any = [];
    this.allContactData.forEach((element:any) => {
      if (element.subject.toLowerCase().includes(this.searchTerm.toLowerCase())
        || element.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        || element.email.toLowerCase().includes(this.searchTerm.toLowerCase())
        || element.created_at.toLowerCase().includes(this.searchTerm.toLowerCase())){
        tempTableData.push(element);
      }
    });
    this.searchTerm.length == 1 ? this.contactData = this.allContactData : this.contactData = tempTableData;
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
