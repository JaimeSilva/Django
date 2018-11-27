


var roster = []

function add(name){
    var name = prompt("What name would you like to add?")
    roster.push(name);
    console.log()
}

function remove(name){
    var name = prompt("What name would you like to remove?")
    var index = roster.indexOf(name);
    if (index > -1) {
      roster.splice(index, 1);
    }
}

function display(){

        console.log(roster)
    // for(i = 0 ; i < roster.length; i++){
    //     console.log(roster[i])
    // }
}

function main(){
    var method = prompt("Would you like to start the roster web app? [Y/N]")
    if(method != "Y")return;
    while(true){

            var action = prompt("Please select an action: add, remove, display or quit")

            if(action == "quit") break;
            if(action == "add") add(name);
            if(action == "remove") remove(name);
            if(action == "display") display()


    }
}

main()
alert("Thanks")
