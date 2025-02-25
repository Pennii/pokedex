import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "../cabecera/cabecera.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabeceraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokemon';
  private router = inject(Router);

  inicio(){
    this.router.navigate(["/pokemon-list"]);
  }
}
