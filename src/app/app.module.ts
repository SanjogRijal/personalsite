import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { Quill } from 'quill';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CommonTableComponent } from './common-table/common-table.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    BannerComponent,
    NavbarComponent,
    ContentComponent,
    MainPageComponent,
    AboutmeComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactMeComponent,
    CommonTableComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot(),
    AngularFontAwesomeModule,
    // Quill,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
