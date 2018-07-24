import React, { Component } from 'react';
class Commit extends Component {
  state = {
    commitList: [],
  };

  render() {
    console.log(this.props);
    const { commits } = this.props;
    return (
      <div>
        {commits.map(commit => {
          return (
            <div>
              <a href={commit.html_url}>{commit.sha.slice(0, 5)}</a>
              <p>{commit.commit.message}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Commit;
