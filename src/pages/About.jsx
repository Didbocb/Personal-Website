import React from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function About({ data }) {
  const { documentTitle, setDocumentTitle } = useDocumentTitle('About');

  return <h1>Lado Natsvlishvili</h1>;
}