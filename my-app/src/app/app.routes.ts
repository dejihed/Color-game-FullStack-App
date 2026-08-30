import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { GameHistoryComponent } from './game-history/game-history.component';
import { UsersHistoryComponent } from './users-history/users-history.component';
import { AddUserComponent } from './add-user/add-user.component';



export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'color-game', component: ColorGameComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'users', component: UsersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'history', component: GameHistoryComponent },
  { path: 'users-history', component: UsersHistoryComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
