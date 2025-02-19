import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginador',
  imports: [],
  templateUrl: './paginador.component.html',
  styleUrl: './paginador.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginadorComponent {
  @Output() indexActual = new EventEmitter<number>();

  index: number = 0;
  restar(){
    if (this.index > 0 ) {
      this.index--;
    }
    this.indexActual.emit(this.index);
  }
  aumentar(){
    this.index++;
    this.indexActual.emit(this.index);
  }
 }
