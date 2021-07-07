import React from 'react';
const LazyComponents:any = {};
const Components = [
  'NotFound',
  'Dashboard',
  'CreateNewCV'
];

Components.forEach(name => {
	LazyComponents[name] = React.lazy(() => import(`./../modules/${name}`));
});

export default LazyComponents;
