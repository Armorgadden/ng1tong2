import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule} from '@angular/upgrade/static';

import moduleName from './ng1/app.module.ajs';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: []
})
export class AppModule { 
    constructor(private upgrade: UpgradeModule){

    }
    ngDoBootstrap(){
        this.upgrade.bootstrap(document.documentElement, [moduleName], {strictDi: true});
    }
}
