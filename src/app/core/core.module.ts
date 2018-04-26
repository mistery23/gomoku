import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        RouterModule,
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    providers: []
})
export class CoreModule {
}
