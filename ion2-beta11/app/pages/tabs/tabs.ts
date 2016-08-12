import {Component, ApplicationRef, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {Tabs} from 'ionic-angular';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {RouterService} from "../../shared";

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage implements OnInit, OnDestroy {
  @ViewChild('tabs') tabsCtrl: Tabs;
  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  tabs = [
    HomePage,
    AboutPage,
    ContactPage
  ];

  tabIndex = 2;

  constructor(private appRef: ApplicationRef, private routerService: RouterService) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
  }

  ngOnInit() {
    this.routerService.activeRoute$
      .distinctUntilChanged()
      .filter(x => !!x)
      .subscribe(route => {
        console.log(`[tabs::activeRoute$] subscribe`, route);
        const index = this.tabs.indexOf(route.component);
        this.tabIndex = index;
        this.tabsCtrl.select(index);
        this.appRef.tick();
      });
  }

  ngOnDestroy() {

  }

}
