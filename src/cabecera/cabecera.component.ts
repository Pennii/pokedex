import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CabeceraComponent { 
  @Output() cabecera = new EventEmitter<void>();
}
