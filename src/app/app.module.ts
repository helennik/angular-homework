import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListComponent} from './list/list.component';
import {WeatherComponent} from './weather/weather.component';
import {ElementFilterPipe} from './common/pipes/element-filter.pipe';
import {PhonePipe} from './common/pipes/phone.pipe';
import {SocialInfoComponent} from './social-info/social-info.component';

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        WeatherComponent,
        ElementFilterPipe,
        PhonePipe,
        SocialInfoComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
