import { AppState } from './stores/app.reducers';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';
import { filter } from 'rxjs/operators';

export function notNullSelect<T>(mapFn: (state: AppState) => T) {
  return function(stream: Observable<any>): Observable<T> {
    return stream.pipe(
      select(mapFn),
      filter((value: T | null) => !!value)
    );
  };
}