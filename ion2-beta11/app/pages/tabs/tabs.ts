import {Component, ApplicationRef, ViewChild, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
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

  tabIndex = 0;

  constructor(
    private appRef: ApplicationRef,
    private cdr: ChangeDetectorRef,
    private routerService: RouterService
  ) {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
  }

  ngOnInit() {
    console.log(`[tabs::ngOnInit]`);
    this.routerService.activeRoute$
      .distinctUntilChanged()
      .filter(x => !!x)
      .map(route => {
        return this.tabs.indexOf(route.component);
      })
      .distinctUntilChanged()
      .filter(x => x !== this.tabIndex)
      .subscribe(index => {
        console.log(`[tabs::activeRoute$] subscribe`, index);
        this.tabIndex = index;
        this.tabsCtrl.select(index);
        this.cdr.markForCheck();
        // this.appRef.tick();
      });
  }

  ngOnDestroy() {

  }

}
