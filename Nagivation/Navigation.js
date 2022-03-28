import { signIn, signOut, useSession } from 'next-auth/react';

import Link from 'next/link';
import React from 'react';

function Nagivation() {
  const { data: session } = useSession();
  
  return (
    <div style={{
      width: '100%',
      height: '50px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: '50px',
    }}>
    {session ? <p>Signed in as {session?.user.email}</p> : <p>Not signed in</p>}
    <ul style={{ 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      listStyle: 'none',
    }}>
      <li style={{margin: '0 10px'}}>
        <Link href='/'>Home</Link>
      </li>
      <li style={{margin: '0 10px'}}>
        <Link href='/Detail'>Detail</Link>
      </li>
      <li style={{margin: '0 10px'}}>
        <Link href='/Contact'>Contact</Link>
      </li>
        {session ? (
          <li style={{margin: '0 10px'}}>
            <Link href='/Admin'>Admin</Link>
          </li>
        ) : (
          ''
        )}
    </ul>
    {session ? (
      <button
        style={{
          height: '25px',
        }}
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    ) : (
      <button
        style={{
          height: '25px',
        }}
        onClick={() => signIn()}
      >
        Sign In
      </button>
    )}
  </div>
);
}

export default Nagivation;
