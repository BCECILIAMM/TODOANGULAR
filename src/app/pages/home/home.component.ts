import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   tasks = signal([
      'Instalar Angular CLI',
      'Crear proyecto',
      'Crear componentes',
      'Crear servicio'
    ]);

    changeHandler(event: Event) {
      const input = event.target as HTMLInputElement
      const newTask = input.value;
      this.tasks.update((tasks) => [...tasks, newTask])
    }

}
