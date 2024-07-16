export type User = {
  id: string;
  name: string;
  email: string;
  username: string;
  profileImage: string;
};

export type AuthenticatedContext = {
  user: User;
};

export type PayloadPart = {
  userId: string
}