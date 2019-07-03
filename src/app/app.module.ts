import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';
import { SlUserComponent } from './sl-user/sl-user.component';
import { MembersComponent } from './members/members.component';
import { TestComponent } from './test/test.component';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user'},
  { path: 'user', component: SlUserComponent },
  { path: 'members', component: MembersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    SlUserComponent,
    MembersComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    MailService,
    {provide: 'apiUrl', useValue: 'https://jsonplaceholder.typicode.com/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
