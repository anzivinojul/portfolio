import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CvEducationComponent } from './pages/cv-education/cv-education.component';
import { HeaderComponent } from './templates/header/header.component';
import { CvWorkExperienceComponent } from './pages/cv-work-experience/cv-work-experience.component';
import { CvSkillsComponent } from './pages/cv-skills/cv-skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CvEducationComponent,
    HeaderComponent,
    CvWorkExperienceComponent,
    CvSkillsComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
