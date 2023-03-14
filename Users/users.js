const fs = require('fs');
const yargs = require('yargs');
const {v4:uuidv4}= require('uuid')

const File_Name = './users.json'

const createUser=(id,name,email,password)=>{
    const users = getUsers();
    const NewUser = {id,name,email,password}
    users.push(NewUser);
    saveUsers(users);
    console.log(`Added New user by ${id}`);
    console.log(id, name, email, password);
}
const readUser=(id)=>{
    const users = getUsers();
    const user = users.find((user)=>user.id===id);
    if(user){
        console.log(user);
    }else{
        console.log(`The User ${id} is not found`);
    }

}
const updateUser = (id,name,email,password)=>{
    const users=getUsers();
    const index = users.findIndex((user)=>user.id===id);
    if(index !== -1){
        users[index]={id,name,email,password}  
        saveUsers(users) 
        console.log(`USer with id ${id} updated`);
    }else{
        console.log(`User Not Foud ${id}`);
    }
}
const deleteUser = (id) => {
    try {
      const users = getUsers();
      const filteredUsers = users.filter((user) => user.id !== id);
      if (users.length === filteredUsers.length) {
        console.log("User not found");
        return;
      }
      saveUsers(filteredUsers);
      console.log(`User with ID ${id} has been deleted`);
    } catch (error) {
      console.log(error.message);
    }
  };
const getUsers=()=>{
    try{
        const data = fs.readFileSync(File_Name);
                return JSON.parse(data);
    }catch(error){
        return [];
    }
}
const saveUsers =(users)=>{
    const data = JSON.stringify(users);
    fs.writeFileSync(File_Name,data);
}
yargs.command({
    command: 'create',
    describe: 'Create a new user',
    builder: {
      name: { demandOption: true, type: 'string', describe: 'User name' },
      email: { demandOption: true, type: 'string', describe: 'User email' },
      password: { demandOption: true, type: 'string', describe: 'User password' },
    },
    handler: (argv) => {
      const id = uuidv4();
      const { name, email, password } = argv;
      
      createUser(id, name, email, password);
    },
  });
  yargs.command({
    command: 'Read',
    describe: 'Read a user',
    builder: {
      id: { demandOption: true, type: 'string', describe: 'Id' },
    },
    handler: (argv) => {
      const { id } = argv;
      readUser(id);
    },
  });
  yargs.parse();
  deleteUser('3ca66efa-2e5c-426b-ac80-992974e6b820')
//    createUser(uuidv4(),'Mohammad1','mohammadhs1.it1999@gmail.com','mama1')

// updateUser('cf61affb-743e-4469-916b-e769e62a89b6','mohammad',"mama@gmail.com",'WElcome');