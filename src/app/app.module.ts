import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

const rootRoutes: Routes = [
    { path: '', loadChildren: 'app/start/start.module#StartModule' },
    { path: 'game', loadChildren: 'app/game/game.module#GameModule' },
    { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        CoreModule,
        RouterModule.forRoot(rootRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
