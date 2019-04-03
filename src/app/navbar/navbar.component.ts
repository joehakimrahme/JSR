import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    ngOnSelect(selected: string) {
        let _deselected, _selected_div, _deselected_div;

        if (selected === 'rules') {
            _deselected = 'roulette';
        } else {
            _deselected = 'rules';
        }

        _selected_div = document.getElementsByClassName(selected)[0];
        _deselected_div = document.getElementsByClassName(_deselected)[0];

        _selected_div.style['display'] = 'block';
        _deselected_div.style['display'] = 'none';
    }
}
