/*
    Weather Underground (Forecast Plus) - local and long range weather forecast.

    Copyright (C) 2014-2021 Peichao Wang

    This program is free software: you can redistribute it and/or modify
    it under the terms of the Mozilla Public License as published by
    the Mozilla Foundation, either version 2 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    Mozilla Public License for more details.
    You should have received a copy of the Mozilla Public License
    along with this program.  If not, see {https://www.mozilla.org/en-US/MPL/}.

    GitHub: 
*/

'use strict';

chrome.runtime.sendMessage({
  method: 'validate',
  href: location.href
});

if (window.top !== window) {
  // try {
  //   navigator.serviceWorker.getRegistrations().then(registrations => {
  //     console.log(registrations);
  //     for (const registration of registrations) {
  //       registration.unregister();
  //     }
  //   });
  // }
  // catch (e) {
  //   console.warn(e);
  // }
}
