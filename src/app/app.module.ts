import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CvEducationComponent } from './pages/cv-education/cv-education.component';
import { HeaderComponent } from './templates/header/header.component';
import { CvWorkExperienceComponent } from './pages/cv-work-experience/cv-work-experience.component';
import { CvSkillsComponent } from './pages/cv-skills/cv-skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DownloadDirective } from './directive/download.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CvEducationComponent,
    HeaderComponent,
    CvWorkExperienceComponent,
    CvSkillsComponent,
    ProjectsComponent,
    ContactComponent,
    DownloadDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
