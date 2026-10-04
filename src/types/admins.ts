export interface Admins {
  email: string;
  password: string;
  // todo: I will make hashed password later for simluating backend
  hashedPassword?: string;
}
