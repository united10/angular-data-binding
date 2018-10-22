import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { S2component1Component } from './scenario2/s2component1/s2component1.component';
import { S1component1Component } from './scenario1/s1component1/s1component1.component';
import { S3component1Component } from './scenario3/s3component1/s3component1.component';
import { S3component2Component } from './scenario3/s3component2/s3component2.component';
import { S4component1Component } from './scenario4/s4component1/s4component1.component';
import { S4component2Component } from './scenario4/s4component2/s4component2.component';
import { S6componenet1Component } from './scenario6/s6componenet1/s6componenet1.component';
import { S6componenet2Component } from './scenario6/s6componenet2/s6componenet2.component';
import { S6componenet3Component } from './scenario6/s6componenet3/s6componenet3.component';
import { S5component1Component } from './scenario5/s5component1/s5component1.component';
import { S5component2Component } from './scenario5/s5component2/s5component2.component';
import { S5component3Component } from './scenario5/s5component3/s5component3.component';
@NgModule({
  declarations: [
    AppComponent,
    S2component1Component,
    S1component1Component,
    S3component1Component,
    S3component2Component,
    S4component1Component,
    S4component2Component,
    S6componenet1Component,
    S6componenet2Component,
    S6componenet3Component,
    S5component1Component,
    S5component2Component,
    S5component3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
