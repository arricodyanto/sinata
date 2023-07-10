export type TAccountProfileProps = {
  payload: {
    account: {
      id: string;
      username: string;
      name: string;
      email: string;
      no_identitas: string;
      unit: string;
      role: string;
      kontak: number;
      img_profil: string;
    };
    iat: number;
    exp: number;
  };
};
