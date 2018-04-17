import {
    ANoteMaster, ADD_NOTE, UPDATE_NOTE, REMOVE_NOTE, SET_NOTE_TO_VIEW
    , ANOTEDATA, ASELECTEDNOTE
} from './note-book.model'

export class NoteAppState {
    noteList: ANoteMaster[];
    selectedNote: ANoteMaster;
}

export const INITIAL_NOTE_APP_STATE: NoteAppState = {
    noteList: ANOTEDATA,
    selectedNote: ASELECTEDNOTE
}

export function noteReducer(noteAppState: NoteAppState, action: any): NoteAppState {
    let self = this;
    switch (action.type) {
        case ADD_NOTE:
            let _newNote = new ANoteMaster();
            _newNote.$key = getUniqueId();
            _newNote.noteTitle = 'New Note';
            noteAppState.noteList.push(_newNote);
            noteAppState.selectedNote = noteAppState.noteList[getIndexOfNote(noteAppState.noteList, _newNote.$key)];
            return getNewNoteAppState(noteAppState);
        case UPDATE_NOTE: {
            let index = getIndexOfNote(noteAppState.noteList, action.data.$key);
            action.data.noteCreatedDate = Date.now();
            noteAppState.noteList[index] = action.data;
            return getNewNoteAppState(noteAppState);
        }
        case REMOVE_NOTE: {
            noteAppState.noteList = noteAppState.noteList.filter(note => note.$key != noteAppState.selectedNote.$key);
            noteAppState.selectedNote = new ANoteMaster();
            return getNewNoteAppState(noteAppState);
        }
        case SET_NOTE_TO_VIEW: {
            let index: number = getIndexOfNote(noteAppState.noteList, action.data.$key)
            noteAppState.selectedNote = noteAppState.noteList[index];
            return getNewNoteAppState(noteAppState);
        }
    }
    return noteAppState;
}

function getIndexOfNote(noteList: ANoteMaster[], $key: number): number {
    let note = noteList.find(note => note.$key == $key);
    return noteList.indexOf(note);
}

function getNewNoteAppState(noteAppState: NoteAppState) {
    console.log(noteAppState)
    localStorage.setItem('noteAppState', window.btoa(JSON.stringify(noteAppState)));
    return Object.assign({}, noteAppState, {
        noteList: noteAppState.noteList,
        selectedNote: noteAppState.selectedNote
    })
}

function getUniqueId() {
    var text = "";
    var possible = "0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return +text;
}