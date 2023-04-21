interface iUserObj {
  username: string
  email: string
  password: string
}

export const login = (username: string, password: string) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  const user = users.find(
    (u: any) => u.username === username && u.password === password,
  )
  if (user) {
    // authenticated
    return user
  } else {
    // authentication failed
    console.log('Authentication failed for user:', username)
  }
}

export const register = (username: string, email: string, password: string) => {
  const userObj = {
    username: username,
    email: email,
    password: password,
    score: 0,
  }
  let users = JSON.parse(localStorage.getItem('users') || '[]')

  // Check if the user already exists
  const userExists = users.find((user: any) => user.email === email)
  if (userExists) {
    throw new Error('User already exists')
  }

  // If the user doesn't exist, add the new user to the local storage
  users.push(userObj)
  localStorage.setItem('users', JSON.stringify(users))
  return userObj
}
