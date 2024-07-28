let todo = [];

let req = prompt('Enter your Request: ');
req = req.toLowerCase()
// console.log (req)

while (true) {
    if (req == 'quit') {
        console.log("Quitting App...")
        break;
    } else if (req == 'add') {
        let addTask = prompt("Enter a task: ");
        todo.push(addTask);
        console.log("task added.");
    } else if (req == 'list' || req == 'show') {
        console.log('----------------------------')
        console.log(`List of tasks;
        `)
        if (todo.length >= 1) {
            for (let char = 0; char <= todo.length - 1; char++) {
                console.log(char + 1, todo[char])
            }
        } else {
            console.log(`Empty list of Tasks: []`)
            break;
        }
        console.log('----------------------------')
        
    } else if (req == 'delete') {
        let delIndex = prompt("Enter which task to be Deleted.")
        todo.splice(delIndex - 1, 1)                    //deletes item at that index
    } else {
        console.warn ("You've entered a wrong/invalid input.")
        
        let comit = prompt('enter "TRY" to continue,else exitting...')
        comit = comit.toLowerCase()
        if (comit != 'try') {
            break;
        }
    }

    req = prompt('Enter your Request(or Quit): ');
}

console.log(`

Thankyou for using the to-Do app

author: shivam verma~`)