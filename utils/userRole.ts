export const handleUserRole = (userRole: string) => {
  if (userRole === "ADMIN") {
    return "Administrator";
  } else {
    return "Developper";
  }
};
