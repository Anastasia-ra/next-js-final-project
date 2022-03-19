import { useCallback, useEffect, useState } from 'react';
import { css, Global } from '@emotion/react';
// import { getUserByValidSessionToken } from '../util/database';
// import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();

  const refreshUserProfile = useCallback(async () => {
    const response = await fetch('/api/profile');
    const data = await response.json();

    if ('errors' in data) {
      console.log(data.errors);
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
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            font-family: Gill Sans MT, Calibri, Arial, sans-serif;
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

// export async function getServerSideProps(context) {
//   const sessionToken = context.req.cookies.sessionToken;
//   const user = await getUserByValidSessionToken(sessionToken);

//   if (!user) {
//     return {};
//   }

//   return {
//     props: {
//       user: user,
//     },
//   };
// }
