import React from 'react';
import './content.scss';
import FormState from '../formState';
import Post from '../post';

export default function Content() {
  return (
    <div className="content">
      <FormState />
      <Post />
    </div>
  );
}
