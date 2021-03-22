//two lists for the todoList elements, which contains the entire element
var todoList = [];
//and the date to be able to sort it by
var dateList = [];

/**
 * This is the function that adds an element to the to do list.
 * There are no parameters or return values and simply acts as a way to simplfy the action of getting the values
 * and checking if they are empty.
 */

function addElement() {
    //first it checks if either of the inputs are blank
    if(document.getElementById("dueDate").value == "" || document.getElementById("textOnLabel").value == "") {
        //and if so it alerts the user
        alert("Input is empty! Please enter something.");
    }
    else {
        /*
            little note: i used the JQuery library for this project as it simplifies a lot of the functions in 
            manipulating DOM elements, so rather than having to type out document.getElementById(""), 
            it highly simplifies the program for me to use JQuery syntax instead. This also simplifies the 
            source code and makes it look nicer, rather than it being more messy.
         */

        //and if there is input it makes a <p> element that contains the text
        let listItem = document.createElement("p");
        //it then puts the text in and assignments it a class name
        listItem = initCheckbox(listItem);
        //it appends the listItem to the mainlist
        $("#mainList").append(listItem); 
        //it then sets both of the input fields to "", or just blank
        $("#textOnLabel").val(" ");
        $("#dueDate").val("");
        //then sorts the list based on due date
        sortItems();
    }
}
/**
 * This function initalizes a <p> element for use inside of 
 * @param {Element} listItem <p> element to initalize for the list.
 * @returns {Element} listItem with the textContent and className changed.
 */

function initCheckbox(listItem) {
    let ret = listItem;
    let date = document.getElementById("dueDate").value;
    let dueDate = new Date(date); 
    ret.textContent = `task: ${document.getElementById("textOnLabel").value}|| due date: ${getDate(dueDate.toISOString())}`;
    ret.className = "todoListElement";
    todoList.push(listItem);
    dateList.push(dueDate);
    return ret;
}

function sortItems() {
    //uses bubble sort to sort the todolist by sorting the datelist
    let sortedLists = sortByList1(dateList, todoList);
    dateList = sortedLists[0];
    todoList = sortedLists[1];
    let mainList = document.getElementById("mainList");
    //keeps removing list children until 
    while(mainList.lastElementChild != null) {
        mainList.removeChild(mainList.lastElementChild);
    }
    addSortedItems();
}

function addSortedItems() {
    /*
        i'd rather not comment on every single attribute of this function, but a summary of it
        is that it makes a nesting system for each task that looks like that
        div 
        |   p
        |   | text contianing the task and due date
        |   div 
        |   |   p  
        |   |   | X button and done with task text
        
    */
    
    for(let k = 0; k < todoList.length; k++) {
        todoList[k].id = `item${k}`
        //div for the entire task
        $("<div />")
            .attr("id", `div${k}`)
            .addClass("checkboxDiv")
            .appendTo("#mainList");
        $(`#div${k}`).append(todoList[k]);
        //div for the X button and done with task text
        $("<div />")
            .attr("id", `taskText${k}`)
            .addClass("taskText")
            .appendTo(`#div${k}`)
            .on("click", function() {
                let numid = this.id.split("")[this.id.length - 1];
                todoList.splice(numid, 1);
                $(`#item${numid}`).remove();
                $(`checkbox${numid}`);
                sortItems();
            });
        //X button
        $("<p />")
            .attr("id", `checkbox${k}`)
            .appendTo($(`#taskText${k}`))
            .addClass("listCheckbox")
            .text('X')
            .wrapInner("<b />");
        //done with this task text
        $("<p />")
        .attr("id", `label${k}`)
        .appendTo($(`#taskText${k}`))
        .addClass("itemLabel")
        .text(" done with this task!");
    }
}

