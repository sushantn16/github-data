export const getUserDetails = async (username: string) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    return data;
}

export interface githubResponse {
    avatar_url: string,
    name: string,
    public_repos: string,
    repos_url: string,
    url: string,
    followers: string,
    following: string,
    bio: string,
    html_url: string
  }