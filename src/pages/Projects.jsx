import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Projects({ data }) {
  const { documentTitle, setDocumentTitle } = useDocumentTitle('Projects');

  return <h1>Projects</h1>;
}