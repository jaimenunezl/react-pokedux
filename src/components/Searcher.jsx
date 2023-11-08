import { Input } from 'antd';

import React from 'react';

function Searcher() {
  return (
    <Input.Search style={{ maxWidth: '320px' }} placeholder="Pikachu..." />
  );
}

export { Searcher };
