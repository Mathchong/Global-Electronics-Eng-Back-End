import bcrypt from "bcrypt";

export function encrypt(data: string) {
  return bcrypt.hashSync(data, 10);
}

export function verifyHash(password: string, hash: string) {
  return bcrypt.compareSync(password, hash);
}
