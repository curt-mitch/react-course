const React = require('react');
const ReactDom = require('react-dom');
const routes = require('./config/routes');
const Raven = require('raven-js');

const sentryKey = '74dc4a71977d47b9b75e48b9b62f4568';
const sentryApp = '92358';
const sentryUrl = `https://${sentryKey}@app.getsentry.com/${sentryApp}`;

const _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
};

Raven.config(sentryUrl, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install();

ReactDom.render(
  routes,
  document.getElementById('app')
);
