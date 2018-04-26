import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StartComponent } from './start.component';

const startRoutes: Routes = [
    { path: '', component: StartComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(startRoutes)
    ],
    declarations: [StartComponent]
})
export class StartModule {
}
