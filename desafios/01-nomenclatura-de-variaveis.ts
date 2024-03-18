// Nomenclatura de variáveis

const categoryListForUsers = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getDataUsers(req, res) {
  const githubUsers = String(req.query.username)

  if (!githubUsers) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const responseUser = await fetch(`https://api.github.com/users/${githubUsers}`);

  if (responseUser.status === 404) {
    return res.status(400).json({
      message: `User with username "${githubUsers}" not found`
    })
  }

  const dataOfUsers = await responseUser.json()

  const orderCategoryListForUsers = categoryListForUsers.sort((a, b) =>  b.followers - a.followers); 

  const categoryUsers = orderCategoryListForUsers.find(i => dataOfUsers.followers > i.followers)

  const result = {
    githubUsers,
    categoryUsers: categoryUsers.title
  }

  return result
}

getDataUsers({ query: {
  username: 'josepholiveira'
}}, {})