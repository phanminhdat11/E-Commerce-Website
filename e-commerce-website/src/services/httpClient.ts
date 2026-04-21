import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export const httpClient = {
  get: (url: string) => {
    return from(fetch(url)).pipe(
      switchMap(res => res.json())
    );
  },

  post: (url: string, body: any) => {
    return from(
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    ).pipe(switchMap(res => res.json()));
  }
};