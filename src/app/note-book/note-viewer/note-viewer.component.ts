import { Component, AfterViewInit, Input, ViewChild, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { noteReducer, INITIAL_NOTE_APP_STATE, NoteAppState } from './../note-book.store';
import {
	ANoteMaster, ADD_NOTE, UPDATE_NOTE, REMOVE_NOTE, SET_NOTE_TO_VIEW
	, ANOTEDATA, ASELECTEDNOTE
} from './../note-book.model'

@Component({
	selector: 'app-note-viewer',
	templateUrl: './note-viewer.component.html',
	styleUrls: ['./note-viewer.component.scss'],
	// encapsulation: ViewEncapsulation.None,
	providers: []
})


export class NoteViwerComponent implements OnInit {
	@select() selectedNote;
	public selectedNoteData: ANoteMaster;
	@ViewChild('editableArea') editableArea: ElementRef;

	constructor(private ngRedux: NgRedux<NoteAppState>) {

	}

	ngOnInit() {
		this.ngRedux.select('selectedNote').subscribe(data => {
			this.selectedNoteData = data as ANoteMaster;
			// this.editableArea && this.editableArea.nativeElement.focus();
		})
	}

	public saveSelectedNote() {
		this.ngRedux.dispatch({ type: UPDATE_NOTE, data: this.selectedNoteData })
	}
}