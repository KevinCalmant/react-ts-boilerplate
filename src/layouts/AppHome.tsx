import { useEffect, useState } from 'react';
import ReactLogo from '../assets/react.svg';
import ReactRouterLogo from '../assets/react-router.svg';
import AxiosLogo from '../assets/axios.svg';
import RxjsLogo from '../assets/rxjs.svg';
import TypescriptLogo from '../assets/typescript.svg';
import ViteLogo from '../assets/vitejs.svg';
import SassLogo from '../assets/sass.svg';

const AppHome = () => {
  const [imageCounter, setImageCounter] = useState(0);

  const technologies = [
    {
      alt: 'react',
      logo: ReactLogo,
      label: 'React',
      docUrl: 'https://reactjs.org',
    },
    {
      alt: 'react router',
      logo: ReactRouterLogo,
      label: 'React Router',
      docUrl: 'https://reactrouter.com/',
    },
    {
      alt: 'axios',
      logo: AxiosLogo,
      label: 'Axios',
      docUrl: 'https://axios-http.com/',
    },
    {
      alt: 'rxjs',
      logo: RxjsLogo,
      label: 'Rxjs',
      docUrl: 'https://rxjs.dev/',
    },
    {
      alt: 'typescript',
      logo: TypescriptLogo,
      label: 'Typescript',
      docUrl: 'https://www.typescriptlang.org/',
    },
    {
      alt: 'vitejs',
      logo: ViteLogo,
      label: 'ViteJS',
      docUrl: 'https://vitejs.dev/',
    },
    {
      alt: 'sass',
      logo: SassLogo,
      label: 'Sass',
      docUrl: 'https://sass-lang.com/',
    },
  ];

  useEffect(() => {
    const tick = setInterval(() => updateCount(), 3000);
    return () => clearInterval(tick);
  }, []);

  const updateCount = () => {
    setImageCounter((oldCount) => {
      if (oldCount !== technologies.length - 1) {
        return oldCount + 1;
      }
      return 0;
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <p>React boiler plate app</p>
        {technologies.map((image) => {
          return (
            <img
              key={image.alt}
              className={
                'logo' +
                (image.alt !== technologies[imageCounter].alt ? ' hide' : '')
              }
              src={image.logo}
              alt={image.alt}
            />
          );
        })}
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <div className='links'>
          {technologies.map((technology) => {
            return (
              <a
                className='App-link'
                href={technology.docUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                {technology.label}
              </a>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default AppHome;
