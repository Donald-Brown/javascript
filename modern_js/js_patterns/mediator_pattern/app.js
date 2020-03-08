const User = function(name){
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to){
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const ChatRoom = function(){
    let users = {}; // list of users

    return {
        register: function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to){
            if(to){
                // Single user message
                to.recieve(message, from);
            }else{
                //mass message
                for(key in users){
                    if(users[key] !== from){
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const mary = new User('Mary');
const sarah = new User('Sarah');
const jill = new User('Jill');

const chatroom = new ChatRoom();

chatroom.register(mary);
chatroom.register(sarah);
chatroom.register(jill);

mary.send('Hello', jill);
sarah.send('Hi');