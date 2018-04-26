import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GameComponent } from './game.component';

const gameRoutes: Routes = [
    { path: '', component: GameComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(gameRoutes)
    ],
    declarations: [GameComponent]
})
export class GameModule {
}
