const users = localStorage.getItem( 'users' ) || [ {
    role: 'doctor',
    username: 'jupegarnica',
    name: 'Juan',
    password: '1234',
    uid:'1'
} ];


const api = {
    login(username, password) {
        return users.find(user => user.username === username && user.password === password)
    },
    createUser(user){
       users.push(user);
       localStorage.setItem('users', users);
    }
}


export default api;