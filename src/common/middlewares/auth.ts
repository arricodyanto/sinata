import { TokenTypes } from '@/services/data-types';
import jwtDecode from 'jwt-decode';

export async function authRole(tkn: string) {
  if (!tkn) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(tkn, 'base64').toString('ascii');
  const payload: TokenTypes = jwtDecode(jwtToken);
  if (payload.account.role === 'User') {
    return {
      redirect: {
        destination: '/users',
        permanent: false,
      },
    };
  } else if (payload.account.role !== 'User') {
    return {
      redirect: {
        destination: '/admins',
        permanent: false,
      },
    };
  }
}

export async function authAdmin(tkn: string) {
  if (!tkn) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(tkn, 'base64').toString('ascii');
  const payload: TokenTypes = jwtDecode(jwtToken);
  if (payload.account.role !== 'Super Admin') {
    return {
      redirect: {
        destination: '/401',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user: payload,
    },
  };
}

export async function authUser(tkn: string) {
  if (!tkn) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(tkn, 'base64').toString('ascii');
  const payload: TokenTypes = jwtDecode(jwtToken);
  if (payload.account.role !== 'User') {
    return {
      redirect: {
        destination: '/401',
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: payload,
    },
  };
}
