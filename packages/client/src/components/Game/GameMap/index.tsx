import './index.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fixImageMaps } from '../../../helpers/fixImageMaps';

export const GameMap = () => {
  useEffect(() => {
    window.onresize = fixImageMaps;
    window.onload = fixImageMaps;
  }, []);

  return (
    <div className='game-map'>
      <img className='game-map__img' src='/img/gameMapBackground.png' useMap='#levels-map' />
      <map className='game-map__map' name='levels-map'>
        <area className='game-map__area' alt='1' href='#map-1' coords='247,475,21' shape='circle' />
        <area className='game-map__area' alt='2' href='#map-2' coords='470,116,20' shape='circle' />
        <area className='game-map__area' alt='3' href='#map-3' coords='890,134,19' shape='circle' />
        <area className='game-map__area' alt='4' href='#map-4' coords='903,301,20' shape='circle' />
        <area
          className='game-map__area'
          alt='5'
          href='#map-5'
          coords='1001,526,18'
          shape='circle'
        />
        <area
          className='game-map__area'
          alt='endless'
          href='#endless'
          coords='747,561,18'
          shape='circle'
        />
      </map>

      <div className='pin' id='map-1'>
        <a href='#' className='close'>
          x
        </a>
        <h2>I</h2>
        <img src='' alt='' />
        <p></p>
        <Link to={'/map-1'}>Играть</Link>
      </div>

      <div className='pin' id='map-2'>
        <a href='#' className='close'>
          x
        </a>
        <h2>II</h2>
        <img src='' alt='' />
        <p></p>
        <Link to={'/map-2'}>Играть</Link>
      </div>

      <div className='pin' id='map-3'>
        <a href='#' className='close'>
          x
        </a>
        <h2>III</h2>
        <img src='' alt='' />
        <p></p>
        <Link to={'/map-3'}>Играть</Link>
      </div>

      <div className='pin' id='map-4'>
        <a href='#' className='close'>
          x
        </a>
        <h2>IV</h2>
        <img src='' alt='' />
        <p></p>
        <Link to={'/map-4'}>Играть</Link>
      </div>

      <div className='pin' id='map-5'>
        <a href='#' className='close'>
          x
        </a>
        <h2>V</h2>
        <img src='' alt='' />
        <p></p>
        <Link to={'/map-5'}>Играть</Link>
      </div>

      <div className='pin' id='endless'>
        <a href='#' className='close'>
          x
        </a>
        <h2>&#8734;</h2>
        <img src='' alt='' />
        <p></p>
        <Link to={'/map-endless'}>Играть</Link>
      </div>
    </div>
  );
};
