import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { noteReducer, INITIAL_NOTE_APP_STATE, NoteAppState } from './note-book.store';
import { NgRedux, select } from '@angular-redux/store';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material';


@Component({
    selector: 'app-notebook',
    templateUrl: './note-book.component.html',
    styleUrls: ['./note-book.component.scss'],
    providers: [MediaMatcher]
})
export class NoteBookComponent implements OnInit {
    mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;
    @ViewChild('snav') snavElementRef: MatSidenav;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
        ngRedux: NgRedux<NoteAppState>) {

        let noteAppState: any = localStorage.getItem("noteAppState");
        noteAppState = noteAppState ? JSON.parse(window.atob(noteAppState)) : INITIAL_NOTE_APP_STATE;
        ngRedux.configureStore(noteReducer, noteAppState);

        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnInit() {
        
    }
    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
