import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ContainerComponent } from './components/container/container.component';
import { NewsComponent } from './components/news/news.component';
import { MatchComponent } from './components/match/match.component';
import { VideoComponent } from './components/video/video.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTeamComponent } from './components/new-team/new-team.component';
import { NewPlayerComponent } from './components/new-player/new-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { NewComponent } from './components/new/new.component';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    NewsComponent,
    MatchComponent,
    VideoComponent,
    BlogComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NewTeamComponent,
    NewPlayerComponent,
    AddMatchComponent,
    AddAdminComponent,
    DashboardAdminComponent,
    DisplayUserComponent,
    DisplayMatchComponent,
    NewComponent,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
