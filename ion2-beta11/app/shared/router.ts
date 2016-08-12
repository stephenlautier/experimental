import {BehaviorSubject} from "rxjs/Rx";
import { Injectable } from '@angular/core';

export interface RouteModel {
  path: string;
  component: any;
}

@Injectable()
export class RouterService {

  private routesMap = new Map<string, RouteModel>();

  activeRoute$ = new BehaviorSubject<any>(null);

  constructor() {

  }

  initialize(): void {
    window.onpopstate = () => {
      console.log(`[routerService::onpopstate] init`, window.location);
      this.resolve();
    };
    this.resolve();
  }

  private resolve(): void {
    const route = this.determineRoute();
    if (!route) {
      console.warn(`Route not found!`, window.location);
      return;
    }
    console.log(`Route found! Navigating...`, { location: window.location, component: route });
    this.activeRoute$.next(route);
  }

  mapRoutes(routes: RouteModel[]) {
    for (let route of routes) {
      this.routesMap.set(route.path, route);
    }
  }

  determineRoute() {
    return this.routesMap.get(window.location.hash)
  }
}
