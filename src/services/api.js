const users = [
    {
        role: 'admin',
        username: 'jupegarnica',
        name: 'Juan',
        password: '1234'
    }
];


const api = {
    login(username, password) {
        return users.find(user => user.username === username && user.password === password)
    }
}


export default api;