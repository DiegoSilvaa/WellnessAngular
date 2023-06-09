import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
// Routeo
import { AppRoutingModule } from './app-routing/app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

 // Usuario Page

import { PerfilComponent } from './pages/user/perfil/perfil.component';
import { ReservasComponent } from './pages/user/reservas/reservas.component';
import { ReservaPageComponent } from './pages/user/reserva-page/reserva-page.component';
import { NotificacionComponent } from './pages/user/notificacion/notificacion.component';
import { NotificacionConfComponent } from './pages/user/notificacion-conf/notificacion-conf.component';
import { ReservaPageConfComponent } from './pages/user/reserva-page-conf/reserva-page-conf.component';
import { HomeComponent } from './pages/user/home/home.component';

// Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';

// Services
import { AuthServiceService } from './services/auth-service.service';
import { AuthGuard } from './services/can-activate.service';
import { ReservaService } from './services/reserva.service';
import { NotService } from './services/not.service';

import { SideBarAdminComponent } from './components/side-bar-admin/side-bar-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NewAforoComponent } from './pages/admin/new-aforo/new-aforo.component';
import { AlertasComponent } from './pages/admin/alertas/alertas.component';
import { NewreservacionesComponent } from './pages/admin/newreservaciones/newreservaciones.component';
import { RegistroModuloComponent } from './pages/register/registro-modulo/registro-modulo.component';
import { SidebarRegisterComponent } from './components/sidebar-register/sidebar-register.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    PerfilComponent,
    ReservasComponent,
    ReservaPageComponent,
    NotificacionComponent,
    NotificacionConfComponent,
    ReservaPageConfComponent,
    NavbarComponent,
    SideBarAdminComponent,
    DashboardComponent,
    NewAforoComponent,
    AlertasComponent,
    NewreservacionesComponent,
    RegistroModuloComponent,
    SidebarRegisterComponent,
    ErrorComponent,
  ],
  imports: [
    MatChipsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    CalendarModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [
    AuthServiceService, 
    AuthGuard, 
    ReservaService,
    NotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
