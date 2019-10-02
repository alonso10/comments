import React from 'react';
import './content.scss';
import FormState from '../formState';
import Post from '../post';
import NavBar from './navbar';

export default function Content() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <FormState />
        <Post />
      </div>
    </div>
  );
}
