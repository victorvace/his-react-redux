const users = JSON.parse(localStorage.getItem('usersArray')) || [
    { role: 'admin', uid: '000', name: 'Manolo', surname: 'Fernandez', dni: '123456789K', email: 'manolo@email.com', password: '0' },
    { role: 'technical', uid: '001', name: 'Juan Elias', surname: 'Guerra', dni: '123456789N', email: 'jelias@email.com', password: '1' },
    { role: 'doctor', uid: '010', name: 'Víctor', surname: 'Vanaclocha', dni: '123456789L', email: 'victor@email.com', password: '10' },
    { role: 'doctor', uid: '011', name: 'Kike', surname: 'Martinez', dni: '123456789M', email: 'kike@email.com', password: '11' },
    { role: 'patient', uid: '100', name: 'Juan', surname: 'Garnica', dni: '123456789G', email: 'juan@email.com', password: '100' },
    { role: 'patient', uid: '101', name: 'Xavi', surname: 'Rodriguez', dni: '123456789C', email: 'xavi@email.com', password: '101' },
    { role: 'patient', uid: '102', name: 'Javi', surname: 'Olmo', dni: '123456789D', email: 'javi@email.com', password: '102' }
];

const records = JSON.parse(localStorage.getItem('recordsArray')) || [
    { userId: '000', doctorId: '010', log: ['Enfermedad1', 'Enfermedad2', 'Enfermedad3', 'Enfermedad4']},
    { userId: '100', doctorId: '010', log: ['Enfermedad1', 'Enfermedad2', 'Enfermedad3', 'Enfermedad4']},
    { userId: '101', doctorId: '010', log: ['Enfermedad1', 'Enfermedad2']},
    { userId: '102', doctorId: '011', log: ['Enfermedad1', 'Enfermedad2', 'Enfermedad3']}
];


const api = {
    addNewUser(newUser) {
        newUser.uid = Math.random().toString(36).substr(2, 9);
        users.push(newUser);
        this.saveData();
    },

    saveData() {
        localStorage.setItem('usersArray', JSON.stringify(users));
        console.log(users);
        localStorage.setItem('recordsArray', JSON.stringify(records));
        console.log(records);
    },

    login(email, password) {
        return users.find(user => user.email === email && user.password === password);
    },

    createUser(user){
        users.push(user);
        localStorage.setItem('usersArray', users);
    },

    getUsers() {
        return users;
    },

    getUser(id) {
        return users.find( item => item.uid === id);
    },

    getFullNameByID(id) {
        return users.find( user => user.uid === id).name + ' ' + users.find( user => user.uid === id).surname;
    },

    getListMedicos() {
        return users.filter( item => item.role === 'doctor' );
    },

    getListPacientes() {
        return users.filter( item => item.role === 'patient' );
    },

    getPaciente(id) {
        return users.find( item => item.uid === id);
    },

    getListHistoriales(id) {
        return records.filter( item => item.doctorId === id );
    },

    getHistorial(id) {
        return records.find( item => item.userId === id );
    }
}

export default api;