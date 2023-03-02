import React from 'react';
import ItemTitle from './ItemTitle';
import ItemSpecification from './ItemSpecification';

const ListItem = ({ item }) => {
  return (
    <li>
      <ItemTitle title={item.title} />
      <ItemSpecification specification={item.specification} />
    </li>
  );
};

export default ListItem;