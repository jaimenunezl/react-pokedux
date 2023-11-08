import { Col, Layout, Row, Spin } from 'antd';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import './App.css';
import { PokemonCard, PokemonList, Searcher } from './components';
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import logo from './statics/logo.svg';

function App() {
  const pokemons = useSelector(({ data }) => data.pokemons, shallowEqual);
  const loading = useSelector(({ ui }) => ui.isLoading);
  const dispatch = useDispatch();

  const { Header, Content } = Layout;

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Header className="header">
        <img src={logo} alt="logo" />
        <Searcher />
      </Header>

      <Content style={{ marginTop: '16px' }}>
        {loading && (
          <Row justify={'center'}>
            <Col>
              <Spin spinning={true} size={'large'} />
            </Col>
          </Row>
        )}

        {!loading && pokemons?.length > 0 && (
          <PokemonList>
            {pokemons.map((pokemon) => {
              return (
                <Col key={pokemon.name}>
                  <PokemonCard pokemon={pokemon} />
                </Col>
              );
            })}
          </PokemonList>
        )}
      </Content>
    </Layout>
  );
}

export { App };
