import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  template: `
      <h1>404: Not Found</h1>
      <button mat-raised-button color="primary" routerLink="/">Take Me Home</button>
  `,
})
export class NotFoundPageComponent {}
