var React = require('react');

const UserItem = require('./userItem')

const PLACEHOLDER = 'https://placeimg.com/60/60/people';
// An anonymous user if the message does not have that information
const dummyUser = {
  avatar: PLACEHOLDER,
  email: 'Anonymous'
};

const UserList = React.createClass({
  logout() {
    app.logout().then(() => window.location.href = '/index.html');
  },

  render() {
    const users = this.props.users;

    return (
      <aside className="sidebar col col-3 flex flex-column flex-space-between">
        <header className="flex flex-row flex-center">
          <h4 className="font-300 text-center">
            <span className="font-600 online-count">{users.length}</span> users
          </h4>
        </header>
        <ul className="flex flex-column flex-1 list-unstyled user-list">
          {this.props.users.map((user, index) => {
              return <UserItem key={index} user={user} />
            })}
        </ul>
        <footer className="flex flex-row flex-center">
          <a href="#" className="logout button button-primary" onClick={this.logout}>
          Sign Out
          </a>
        </footer>
      </aside>
    );
  }
});

module.exports = UserList;
