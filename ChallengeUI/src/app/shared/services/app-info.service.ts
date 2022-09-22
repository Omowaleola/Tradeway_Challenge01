import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Admin';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
export class Change<T> {
  type: 'insert' | 'update' | 'remove';

  key: any;

  data: Partial<T>;
}

class Response<T> {
  data: T[];
}
