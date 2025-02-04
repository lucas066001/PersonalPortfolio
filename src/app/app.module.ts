import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './body/header/header.component';

import { LabelComponent } from './body/header/label/label.component';
import { SideBarComponent } from './body/side-bar/side-bar.component';
import { MainResumeComponent } from './body/main-resume/main-resume.component';
import { ChatComponent } from './body/chat/chat.component';
import { FooterComponent } from './body/footer/footer.component';
import { ExperienceResumeComponent } from './body/main-resume/experience-resume/experience-resume.component';
import { FormationResumeComponent } from './body/main-resume/formation-resume/formation-resume.component';
import { HobbieResumeComponent } from './body/main-resume/hobbie-resume/hobbie-resume.component';
import { AboutMeComponent } from './body/side-bar/about-me/about-me.component';
import { ToolCompetenceComponent } from './body/side-bar/tool-competence/tool-competence.component';
import { NotifComponent } from './body/notif/notif.component';
import { ExperienceDetailComponent } from './body/main-resume/experience-detail/experience-detail.component';
import { FormsModule } from '@angular/forms';
import { LangageToggleComponent } from './body/langage-toggle/langage-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotifComponent,
    LabelComponent,
    SideBarComponent,
    MainResumeComponent,
    ChatComponent,
    FooterComponent,
    ExperienceResumeComponent,
    FormationResumeComponent,
    HobbieResumeComponent,
    AboutMeComponent,
    ToolCompetenceComponent,
    ExperienceDetailComponent,
    LangageToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
