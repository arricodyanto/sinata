export type AccountTokenTypes = {
  id: string;
  username: string;
  name: string;
  email: string;
  unit: string;
  role: string;
  img_profil: string;
};

export type TokenTypes = {
  account: AccountTokenTypes;
  iat: number;
  exp: number;
};

export type TPengumuman = {
  id: string;
  judul_pengumuman: string;
  tgl_upload: Date;
  content: string;
};
