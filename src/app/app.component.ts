import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet />', //se cambia el templateurl por esta etiqueta y se puede eliminar el html

})
export class AppComponent {
  title = 'store';
}
