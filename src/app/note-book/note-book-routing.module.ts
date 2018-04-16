import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteBookComponent } from './note-book.component';

const routes: Routes = [
    {
        path: 'notebook',
        component: NoteBookComponent,
    }, {
        path: '',
        redirectTo: 'notebook'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NoteBookRoutingModule { }
