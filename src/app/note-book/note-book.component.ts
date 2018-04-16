import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { noteReducer, INITIAL_NOTE_APP_STATE, NoteAppState } from './note-book.store';
import { NgRedux, select } from '@angular-redux/store';

@Component({
    selector: 'app-notebook',
    templateUrl: './note-book.component.html',
    styleUrls: ['./note-book.component.scss'],
    providers: []
})
export class NoteBookComponent implements OnInit {
    constructor(ngRedux: NgRedux<NoteAppState>) {
        let noteAppState: any = localStorage.getItem("noteAppState");
        noteAppState = noteAppState ? JSON.parse(window.atob(noteAppState)) : INITIAL_NOTE_APP_STATE;
        ngRedux.configureStore(noteReducer, noteAppState);
    }

    ngOnInit() {

    }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
}
