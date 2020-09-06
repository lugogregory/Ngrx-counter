import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../redux/contador.actions';
import { random } from '../redux/contador.actions';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {

  count$: Observable<number>;
  numSet;
  constructor(private store: Store<{ count: number }>) { }

  ngOnInit(): void {
    this.count$ = this.store.pipe(select('count')); // Se llama 'count' porque en el forRoot colocamos 'count'
  }

  increment() {
    this.store.dispatch(actions.inc());
  }

  decrement() {
    this.store.dispatch(actions.dec());
  }

  reset() {
    this.store.dispatch(actions.reset());
  }

  random() {
    this.store.dispatch(actions.random());
  }

  set(numTo: number) {
    this.store.dispatch(actions.set({ num: numTo }));
  }


}
