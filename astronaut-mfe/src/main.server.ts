import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, {
	providers: [importProvidersFrom(NoopAnimationsModule)]
});

export default bootstrap;
