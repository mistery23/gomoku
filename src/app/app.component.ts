import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    title = 'app';
    matrix;

    ngOnInit() {
        this.matrix = this.createMatrix(100);
        console.log(this.matrix);
    }

    createMatrix(count) {
        const matrix = [];
        for (let i = 0; i < count; i++) {
            const row = [];
            for (let y = 0; y < count; y++) {
                row.push({ id: `${i}${y}` });
            }
            matrix.push(row);
        }
        return matrix;
    }
}
