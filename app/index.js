const React = require('react');
const ReactDom = require('react-dom');

const USER_DATA = {
  name: 'Curtis Mitchell',
  username: 'curt-mitch',
  image: 'https://avatars3.githubusercontent.com/u/4998605?v=3&s=140'
};

const ProfilePic = React.createClass({
  render: function () {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

const ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

const ProfileName = React.createClass({
  render: function () {
    return (
      <div>{this.props.name}</div>
    )
  }
});

const Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDom.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
