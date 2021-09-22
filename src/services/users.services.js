
export const UserService = () => ({
  searchUser: query => fetch(`https://api.github.com/search/users?q=${query}`),
  listRepos: user => fetch(`https://api.github.com/users/${user}/repos`)
});
