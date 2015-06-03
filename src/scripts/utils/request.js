'use strict';

import superagent from 'superagent';
import noCache from 'superagent-no-cache';

const serverUrl = 'http://localhost:3000';

const request = (type, url, data, fn) => {
  let agent = superagent[type](serverUrl + '/' + url).use(noCache);

  if (typeof data === 'object') {
    agent = agent.send(data);
  }

  agent.end(fn || data);
};

export default request;
