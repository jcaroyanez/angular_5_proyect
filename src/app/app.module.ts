import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';


import { NoUrlComponent } from './component/no-url/no-url.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CategoryMenuModule } from './component/category-menu/category-menu.module';
import{ RoutingModule } from './routing/routing.module';
import {HttpClientModule} from '@angular/common/http';

import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';
import { MenuCategoryService } from './services/menu-category.service';


const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoUrlComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    APP_DIRECTIVES
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    CategoryMenuModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MenuCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
