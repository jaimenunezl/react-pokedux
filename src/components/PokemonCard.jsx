import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StartButton } from './StartButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../slices/dataSlice';

function PokemonCardCover({ name, url }) {
  return <img src={url} alt={name} />;
}

function PokemonCard({ pokemon: data }) {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(setFavorite({ id: data.id }));
  };

  return (
    <>
      {!data && <p>Cargando...</p>}

      {data && (
        <Card
          style={{ maxWidth: '250px' }}
          title={data.name}
          extra={
            <StartButton
              isActive={!!data?.isFavorite}
              onClick={handleFavorite}
            />
          }
          cover={
            <PokemonCardCover
              url={data.sprites.front_default}
              name={data.name}
            />
          }
        >
          <Meta description={data.types.map((e) => e.type.name)} />
        </Card>
      )}
    </>
  );
}

export { PokemonCard };
