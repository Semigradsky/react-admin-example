'use strict';

import superagent from 'superagent';
import noCache from 'superagent-no-cache';

const serverUrl = 'http://localhost:3000';

const request = (type, url, fn) => {
  superagent[type](serverUrl + '/' + url).use(noCache).end(fn);
};

export default request;
