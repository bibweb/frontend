export enum UserRoles {
  NONE = 0,
  ADMIN = 1,
  USER = 2
}

export const UserRolesStrings = new Map<number, string>([
  [UserRoles.NONE, ''],
  [UserRoles.ADMIN, 'ROLE_ADMIN'],
  [UserRoles.USER, 'ROLE_USER']
]);
