import React from 'react';

const Repo = (props) => (
  <div>
    <a href={props.repo.repo_url}>{props.repo.repo_name}</a>
  </div>
)

export default Repo;