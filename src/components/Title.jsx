import { Helmet } from 'react-helmet-async';

export function Title({ title }) {
  return (
    <Helmet>
      <title>{title} | Laboratorio Clínico del Mar</title>
    </Helmet>
  );
}
