import { createRoot } from 'react-dom/client';
import { useRoute, useLocation } from 'wouter';
import '../styles/World.module.css';
import { Logo } from '@pmndrs/branding';
import {World} from './pages/World';


function Root() {
  const [, params] = useRoute('/item/:id');
  const [, setLocation] = useLocation();
  return (
    <>
      <World />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <a
          href='https://pmnd.rs/'
          style={{
            position: 'absolute',
            bottom: 40,
            left: 90,
            fontSize: '13px',
          }}
        >
          pmnd.rs
          <br />
          dev collective
        </a>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            fontSize: '13px',
          }}
        >
          15/06/2023
        </div>
        <Logo
          style={{ position: 'absolute', bottom: 40, left: 40, width: 30 }}
        />
        <a
          style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}
          href='#'
          onClick={() => setLocation('/world')}
        >
          {params ? '< back' : 'double click to enter portal'}
        </a>
      </div>{' '}
    </>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
