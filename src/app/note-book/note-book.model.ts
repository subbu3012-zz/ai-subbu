export class ANoteMaster {
    $key?: number;
    noteTitle: string;
    noteDesc: string;
    noteCreatedDate: Date = new Date();
}

export const ANOTEDATA: ANoteMaster[] = [
    {
        $key: 1,
        noteTitle: "First Note",
        noteDesc: "Description of first note",
        noteCreatedDate: new Date()
    },
    {
        $key: 2,
        noteTitle: "Second Note",
        noteDesc: "Description of second note",
        noteCreatedDate: new Date()
    },
    {
        $key: 3,
        noteTitle: "Third Note",
        noteDesc: "Description of third note",
        noteCreatedDate: new Date()
    },
    {
        $key: 4,
        noteTitle: "Fourth Note",
        noteDesc: "Description of fourth note",
        noteCreatedDate: new Date()
    },
    {
        $key: 5,
        noteTitle: "Fifth Note",
        noteDesc: "Description of fifth note",
        noteCreatedDate: new Date()
    }
]

export const ASELECTEDNOTE: ANoteMaster =
    {
        $key: 3,
        noteTitle: "Third Note",
        noteDesc: "Description of third note",
        noteCreatedDate: new Date()
    };

export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const SET_NOTE_TO_VIEW = 'SET_NOTE_TO_VIEW';
export const UPDATE_NOTE = 'UPDATE_NOTE'