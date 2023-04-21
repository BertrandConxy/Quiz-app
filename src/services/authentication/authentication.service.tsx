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
    console.log('User authenticated:', user)
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
  localStorage.setItem('users', JSON.stringify(userObj))
  return userObj
}
