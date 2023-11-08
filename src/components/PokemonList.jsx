import { Row } from 'antd';

function PokemonList({ children }) {
  return (
    <Row justify="center" gutter={[8, 8]}>
      {children}
    </Row>
  );
}

export { PokemonList };
