/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
const backlog = document.getElementById('backlog');
/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
const done = document.getElementById('done');
/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
let draggedElementID;

/**
 * ${1:Description placeholder}
 *
 * @type {{}\}
 */
let todos = [{
    'id': 0,
    'title': 'Kochen',
    'category': 'open'
},
{
    'id': 1,
    'title': 'Putzen',
    'category': 'open'
},
{
    'id': 2,
    'title': 'Zocken',
    'category': 'open'
}]


/**
*This function filters the todo object for open and closed tasks, saves them into the variables openTasks and closedTasks. 
*The variables will be send to the updateDropfields function with the according id parameter 
*
*/
function initCardsData() {
    let openTasks = todos.filter(t => t['category'] == 'open'); // returns an array with all the object with category: 'open'
    let closedTasks = todos.filter(t => t['category'] == 'closed');
    upodateDropFields('backlog', openTasks);
    upodateDropFields('done', closedTasks);
}


/**
* This function fills a html element with the data from an object array. The element is specified by the recieved fieldID Parameter.
*
* @param {string} fieldID - The ID of the html elemnt that should by filled by the for loop
* @param {string} array - object array with close tasks or open tasks
*/
function upodateDropFields(fieldID, array) {
    let field = document.getElementById(fieldID)
    field.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        field.innerHTML += generateCardHtml(array[i]['id'], array[i]['title']);        
    }
}


/**
* This funciton prevents the default behaviour of the html element for drag and drop 
*
*
*/
function allowDrop(e) {
    e.preventDefault()
}


/**
* This funciton assign the currently dragged element to the global var draggedElementID 
*
*
*/
function startDrag(e) {
    draggedElementID = e.target.id;
}


/**
* This funciton updates the category of the dropped card in the the todo object to open. After this the initCardsData function is called load the html fields acordingly.
* The removed css class prevents a highlighting after the drag and drop ended.
*
*/
backlog.addEventListener('drop', () => {
    todos[draggedElementID]['category'] = 'open';
    initCardsData();
    backlog.classList.remove('drag-highlight');
})


/**
* This funciton updates the category of the dropped card in the the todo object to close. After this the initCardsData function is called load the html fields acordingly.
* The removed css class prevents a highlighting after the drag and drop ended.
*
*/
done.addEventListener('drop', () => {
    todos[draggedElementID]['category'] = 'closed';
    initCardsData();
    done.classList.remove('drag-highlight');
})



/**
* Event listeners to highlight dragged over hmtl elements were the user could drop
* 
*
*/
backlog.addEventListener('dragenter', () => backlog.classList.add('drag-highlight'));


done.addEventListener('dragenter', () => done.classList.add('drag-highlight'));


backlog.addEventListener('dragleave', () => backlog.classList.remove('drag-highlight'));


done.addEventListener('dragleave', () => done.classList.remove('drag-highlight'));


