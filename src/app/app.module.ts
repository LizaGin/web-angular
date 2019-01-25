import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { PayComponent } from './components/pay/pay.component';
import { RequestPaymentComponent } from './components/request-payment/request-payment.component';
import { AnotherBankComponent } from './components/another-bank/another-bank.component';
import { OwnBankComponent } from './components/own-bank/own-bank.component';
import { ValidationDirective } from './validation.directive';
import { LoginComponent } from './components/login/login.component';
import { AdminPannelComponent } from './components/admin-pannel/admin-pannel.component';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'page' },
  {path: 'login', component: LoginComponent},
  {path: 'admin-pannel', component: AdminPannelComponent},
  {path: 'page', component: PageComponent, children:
    [
      {path: '', pathMatch: 'full', redirectTo:'pay'},
      { path: 'pay',
        component: PayComponent,
        children: [
          { path: '', pathMatch: 'full', redirectTo: 'another-bank' },
          { path: 'another-bank', component: AnotherBankComponent },
          { path: 'own-bank', component: OwnBankComponent }
                  ]
      },
      { path: 'request-pay', component: RequestPaymentComponent }
    ]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    PayComponent,
    RequestPaymentComponent,
    AnotherBankComponent,
    OwnBankComponent,
    ValidationDirective,
    LoginComponent,
    AdminPannelComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
