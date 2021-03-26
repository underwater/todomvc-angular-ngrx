import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoFilter } from '../../models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() hasCompletedTodos: boolean | undefined;
  @Input() undoneTodosCount: number | undefined;
  @Input() currentFilter: TodoFilter | undefined;
  @Output() filter = new EventEmitter<TodoFilter>();
  @Output() clearCompleted = new EventEmitter();
}
