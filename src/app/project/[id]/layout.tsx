import React from 'react';

export function generateStaticParams() {
  return [
    { id: 'cake-delight' },
    { id: 'tribelingo' }
  ];
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
