// Запрос к GitHub и получение списка репозиториев
async function getGitHubReposList(owner: string)  {
    let response = await fetch(`https://api.github.com/users/${owner}/repos`)
    let data = await response.json()
    
    return data
}

export default getGitHubReposList