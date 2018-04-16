import { Component, AfterViewInit, Input, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';
import { noteReducer, INITIAL_NOTE_APP_STATE, NoteAppState } from './../note-book.store';
import { NgRedux, select } from '@angular-redux/store';
import {
	ANoteMaster, ADD_NOTE, UPDATE_NOTE, REMOVE_NOTE, SET_NOTE_TO_VIEW
	, ANOTEDATA, ASELECTEDNOTE
} from './../note-book.model'


@Component({
	selector: 'app-note-list',
	templateUrl: './note-list.component.html',
	styleUrls: ['./note-list.component.scss'],
	// encapsulation: ViewEncapsulation.None,
	providers: []
})


export class NoteListComponent implements OnInit {
	@select() noteList;
	public noteListData: ANoteMaster[] = [];
	@select() selectedNote;
	public selectedNoteData: ANoteMaster;
	public searchKeyword: string = "";

	constructor(private ngRedux: NgRedux<NoteAppState>) {

	}

	ngOnInit() {
		this.ngRedux.select('selectedNote').subscribe(data => {
			this.selectedNoteData = data as ANoteMaster;
		})

		this.ngRedux.select('noteList').subscribe(data => {
			this.noteListData = data as ANoteMaster[];
		})
	}

	public setNoteToView(note: ANoteMaster) {
		this.ngRedux.dispatch({ type: SET_NOTE_TO_VIEW, data: note })
	}

	public addNewNote() {
		this.ngRedux.dispatch({ type: ADD_NOTE, data: null })
	}

	public removeNote() {
		this.ngRedux.dispatch({ type: REMOVE_NOTE, data: null })
	}
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchNotes' })
export class SearchNotesPipe implements PipeTransform {
	transform(allNotes: ANoteMaster[], searchKeyword: string) {
		if (!searchKeyword) {
			return allNotes;
		}
		return allNotes.filter(note => note.noteTitle.includes(searchKeyword) || note.noteDesc.includes(searchKeyword));
	}
}