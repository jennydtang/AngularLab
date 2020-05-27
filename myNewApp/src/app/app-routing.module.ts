import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { IntroComponent } from './intro/intro.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'one', component: CompOneComponent },
  { path: 'two', component: CompTwoComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
