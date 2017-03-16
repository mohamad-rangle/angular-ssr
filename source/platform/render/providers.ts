import {Provider, RendererFactory2} from '@angular/core';

import {
  DOCUMENT,
  EventManager,
  ɵBrowserDomAdapter as BrowserDomAdapter,
  ɵDomRendererFactory2 as DomRendererFactory2,
  ɵsetRootDomAdapter as setRootDomAdapter,
} from '@angular/platform-browser';

import {DocumentContainer} from '../document';

import {ApplicationException} from '../../exception';

if (typeof BrowserDomAdapter !== 'function') {
  throw new ApplicationException('This application requires Angular 4');
}

setRootDomAdapter(new BrowserDomAdapter());

export const PLATFORM_RENDERER_PROVIDERS: Array<Provider> = [
  EventManager,
  {provide: DOCUMENT, useFactory: container => container.document, deps: [DocumentContainer]},
  {provide: RendererFactory2, useClass: DomRendererFactory2},
];