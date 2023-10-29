let current_users=['ADAM','Lily','Sophia','Smith','Robert'];
let new_users=['Juadre','Denise','Patrick','Smith','Adam'];

for (let i = 0; i < new_users.length; i++) {
    let available=true;
    for (let j = 0; j < current_users.length; j++) {
        if(new_users[i].toLowerCase()===current_users[j].toLowerCase()){
            console.log(`${new_users[i]} already exists, Enter a new username`);
            available=false;
            break;    
        }
     }
    if(available){
        console.log(`${new_users[i]} available`);
    }
 }