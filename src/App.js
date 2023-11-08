import { Col, Layout, Row, Spin } from 'antd';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getPokemonWithDetails, setLoading } from './actions/action';
import { getPokemons } from './api/pokemons';
import { PokemonCard, PokemonList, Searcher } from './components';
import logo from './statics/logo.svg';
import { getIn } from 'immutable';

function App() {
  const pokemons = useSelector(
    (state) => getIn(state, ['data', 'pokemons'], shallowEqual) // always are different refs
  );
  const loading = useSelector((state) => getIn(state, ['ui', 'loading']));
  const dispatch = useDispatch();

  const { Header, Content } = Layout;

  useEffect(() => {
    dispatch(setLoading(true));

    const fetchPokemons = async () => {
      const data = await getPokemons();
      dispatch(getPokemonWithDetails(data));
      dispatch(setLoading(false));
    };

    fetchPokemons();
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
