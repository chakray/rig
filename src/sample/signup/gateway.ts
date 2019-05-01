import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Gateway {
  renew(key, id) {
    return of({});
  }
  unlock(key, params?) {
    return of({});
  }
  identify(key, id) {
    return of({});
  }
}
