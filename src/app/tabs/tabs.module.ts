import { Tab3PageModule } from './../tab3/tab3.module';
import { Tab2PageModule } from './../tab2/tab2.module';
import { Tab1PageModule } from './../tab1/tab1.module';
import { NewsPageModule } from './../news/news.module';
import { NewsSinglePageModule } from './../news-single/news-single.module';
import { NewsPage } from './../news/news.page';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    NewsPageModule,
    NewsSinglePageModule ,
    Tab3PageModule,
    Tab2PageModule,
    Tab1PageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
