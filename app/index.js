const React = require('react');
const ReactDom = require('react-dom');

const HelloWorld = React.createClass({
  render: function () {
    return (
      <div> Hello React Program </div>
    )
  }
});

ReactDom.render(
  <HelloWorld />,
  document.getElementById('app')
);
