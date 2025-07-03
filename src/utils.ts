const roles = {
  admin: ['create', 'read', 'delete'],
  user: ['read']
};


export function hasPermission(userRole: keyof typeof roles, requiredPermission: string): boolean {
if((!userRole || !requiredPermission) || !roles[userRole]) {
    return false;
}
  const userPermissions = roles[userRole];
  if (userPermissions && userPermissions.includes(requiredPermission)) {
    return true;
  }
  return false;
}