'use strict';

import superagent from 'superagent';
import noCache from 'superagent-no-cache';
import config from 'config.json';

const request = (type, url, data, fn) => {
  if (type === 'delete') {
    type = 'del';
  }

  let agent = superagent[type](config.apiUrl + '/' + url).use(noCache);

  if (typeof data === 'object') {
    agent = agent.send(data);
  }

  agent.end(fn || data);
};

export default request;
