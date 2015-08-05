import superagent from 'superagent';
import noCache from 'superagent-no-cache';
import config from 'config.json';

function getRequester(type) {
  return type === 'delete' ? superagent.del : superagent[type];
}

function request(type, url, data, fn) {
  const requester = getRequester(type);

  let agent = requester(config.apiUrl + '/' + url);

  if (config.clientNoCache) {
    agent = agent.use(noCache);
  }

  if (typeof data === 'object') {
    agent = agent.send(data);
  }

  agent.end(fn || data);
}

export default request;
