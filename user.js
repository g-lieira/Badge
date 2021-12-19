const linksSocialMedia = {
  github: 'g-lieira',
  facebook: 'gabriela.lieira',
  instagram: 'glieira'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}/`

    //alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

/* Maneiras de nomear uma variável
camelCase
PascalCase
snake_case
*/

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

/*função normal:
  function exemplo(argumento){

  }

  arrow function: (anônima)
  argumento => {

  }
*/
