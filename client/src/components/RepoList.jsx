import React from 'react';
import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {props.repos.map(repo =>
    <div>
      <Repo key={repo.repo_id} repo={repo}/>
    </div>)}
  </div>
)

export default RepoList;