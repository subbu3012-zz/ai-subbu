import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteBookRoutingModule } from './note-book-routing.module';
import { NoteBookComponent } from './note-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgReduxModule } from '@angular-redux/store';

import { NoteListComponent, SearchNotesPipe } from './note-list/note-list.component'
import { NoteViwerComponent } from './note-viewer/note-viewer.component'

import { MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material'

@NgModule({
    imports: [
        NgReduxModule,
        FormsModule, ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        NoteBookRoutingModule,
        HttpClientModule,
        MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule
    ],
    declarations: [
        NoteBookComponent,
        SearchNotesPipe,
        NoteListComponent,
        NoteViwerComponent
    ],
    providers: []
})
export class NoteBookModule { }
