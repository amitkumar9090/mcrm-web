export const isAuthenticated = () => {
  if (typeof window !== "undefined") { // ensures this runs in browser, not server
    return !!localStorage.getItem("token");
  }
  return false; // server-side always false
};
