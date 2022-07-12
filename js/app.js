//create js variables for html elements
let countEl = document.getElementById("countNum");
let addButton = document.getElementById("incrementButton");
let saveButton = document.getElementById("saveButton");
let previousEntry = document.getElementById("saveEl");

//listen for clicks
addButton.addEventListener('click', increment);
saveButton.addEventListener('click', save)

//declare and initialize count
let count = 0;
countEl.textContent = count;

//create array for known words
let knownWordArray = [];

//create function to increment
function increment(){
    count++;

    //show word count on page
    countEl.textContent = count;
}


//create function to save
function save() {
    knownWordArray.push(count);

    previousEntry.textContent = "Previous Entries: " + knownWordArray.join("-")

    //reset page
    count = 0;
    countEl.textContent = count;
}


