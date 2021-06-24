import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistsModule } from './modules/artists/artists.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpConfigInterceptor } from './interceptors/httpConfig.interceptor';
import { ErrorDialogService } from './shared/services/error-dialog.service';
import { ErrorDialogComponent } from './shared/components/error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArtistsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    ErrorDialogService
  ],
  entryComponents: [ErrorDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
