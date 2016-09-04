import { Component } from '@angular/core';
import { PruebasComponent } from './pruebas/pruebas.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'hola mundo!';
}
