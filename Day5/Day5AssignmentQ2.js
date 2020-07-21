class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }
      login()
      {
        console.log(`${this.name} has logged in`);
        return this;
      }
    logout()
    {
        console.log(`${this.name} has logged out`);
        return this;
    }
 }
class Moderator extends User{
  constructor(name,age,email,role){
            super(name,age,email);
            this.role = role;
        }
        addCoins(){
            this.luCoins++;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
        }
        removeCoins(){
            this.luCoins--;
            console.log(`${this.name} has ${this.luCoins} coins`);
            return this;
        }
    
    }
class Admin extends Moderator{

     addCourse(user,course)
     {
          user.courses.push(course);
         console.log(user);
     }
    deleteUser(user){
       var u=user;
        users = users.filter(u =>{
            console.log(`${u} has deleted`)
             return u.email != user.email; 
        })
    }
}
let user1 = new User('Karteeki',20,'K@gmail.com')
let user2 = new User('Chatitali',20,'c@gmai.com')
let mod = new Moderator('Chetana',20,'ch@gmail.com','Moderator');
let admin = new Admin('Divya',20,'d@gmail.com');
let users = [user1,user2,mod,admin];
user1.login().logout();
admin.login().logout().addCoins();
admin.addCourse(user1,"Python");
admin.removeCoins();
admin.deleteUser(admin);