import { TAccountProfileProps } from '@/common/types/account-profile';

export function calculateProfileCompleteness(props: TAccountProfileProps) {
  const { account } = props.payload;
  let completeness = 6;

  if (account.id) {
    completeness += 10;
  }

  if (account.username) {
    completeness += 8;
  }

  if (account.name) {
    completeness += 8;
  }

  if (account.email) {
    completeness += 8;
  }

  if (account.no_identitas) {
    completeness += 10;
  }

  if (account.unit) {
    completeness += 12;
  }

  if (account.role) {
    completeness += 10;
  }

  if (account.kontak) {
    completeness += 12;
  }

  if (account.img_profil !== 'default.jpeg') {
    completeness += 16;
  }

  return completeness;
}
