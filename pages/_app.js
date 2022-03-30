import { useCallback, useEffect, useState } from 'react';
import { css, Global } from '@emotion/react';
// import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();

  const refreshUserProfile = useCallback(async () => {
    const response = await fetch('/api/profile');
    const data = await response.json();

    if ('errors' in data) {
      console.log(data.errors);
      console.log('user is undefined in app.js');
      setUser(undefined);
      return;
    }

    setUser(data.user);
  }, []);

  useEffect(() => {
    refreshUserProfile().catch(() => {});
  }, [refreshUserProfile]);

  return (
    <>
      {/* <Head>
        <meta name="theme-color" content="#01aca3" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="512*512" href="/dragon.png" />
      </Head> */}
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            font-family: Calibri, Futura, Arial, sans-serif;
            background: #f3f3f3;

            @media (max-width: 800px) {
              background: white;
            }
          }
          a {
            text-decoration: none;
          }
          a:hover {
            cursor: pointer;
          }
          button:hover {
            cursor: pointer;
          }
        `}
      />
      <Component
        {...pageProps}
        userObject={user}
        refreshUserProfile={refreshUserProfile}
      />
    </>
  );
}

export default MyApp;
