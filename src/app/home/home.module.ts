import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ReportsChartComponent } from './reports-chart/reports-chart.component';
import { VideosMostViewedComponent } from './videos-most-viewed/videos-most-viewed.component';
import { UsersByRegionComponent } from './users-by-Region/users-by-Region.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { StatcardsComponent } from './statcards/statcards.component';
import { TopsellingComponent } from './topselling/topselling.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { OneNewsComponent } from './one-news/one-news.component';
import { MainNavbarModule } from '../main-navbar/main-navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { BackToTopModule } from '../back-to-top/back-to-top.module';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReportsChartComponent,
    VideosMostViewedComponent,
    UsersByRegionComponent,
    StatcardsComponent,
    TopsellingComponent,
    HomeNewsComponent,
    OneNewsComponent,
    RecentActivityComponent,
  ],
  imports: [NgxEchartsModule.forRoot({
    echarts: () => import('echarts'),
  }),
    CommonModule,
    HomeRoutingModule,
    NgApexchartsModule,
    MainNavbarModule,
    SidebarModule,
    BackToTopModule,
  ]
})
export class HomeModule { }
