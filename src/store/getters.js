const getters = {
  roles: state => state.user.roles,
  addRouters: state => state.permission.addRouters,
  token: state => state.token,
  menuIcon: state => state.permission.menuIcon
}
export default getters