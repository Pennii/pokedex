import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  imports: [],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuscadorComponent {
  @Output() buscar = new EventEmitter<string>();

  enviarNombre(event: Event){
    const nombre = (event?.target as HTMLInputElement).value;
    this.buscar.emit(nombre);
  }
 }
