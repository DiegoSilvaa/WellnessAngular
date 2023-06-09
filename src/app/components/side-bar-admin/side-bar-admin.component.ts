import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-side-bar-admin',
  templateUrl: './side-bar-admin.component.html',
  styleUrls: ['./side-bar-admin.component.css']
})
export class SideBarAdminComponent {
  constructor(private authService: AuthServiceService, private router: Router) { }
  
  onSubmitLog() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
