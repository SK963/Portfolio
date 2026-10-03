import React from 'react';

export function generateStaticParams() {
  return [
    { id: 'cake-delight' },
    { id: 'tribelingo' },
    { id: 'notecraft' },
    { id: 'hr-analytics-excel' },
    { id: 'ibm-hr-tableau' }
  ];
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
