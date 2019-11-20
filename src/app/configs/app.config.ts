import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  votesLimit: 3,
  topHeroesLimit: 5,
  snackBarDuration: 3000,
  cspDirectives: {
    defaultSrc: [
      '\'self\'',
      'ws://localhost:4200',
    ],
    styleSrc: [
      '\'self\'',
      '\'unsafe-inline\'',
    ],
    scriptSrc: [
      '\'self\'',
      '\'unsafe-inline\'',
    ]
  }
};
