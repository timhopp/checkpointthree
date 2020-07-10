import ListService from "../Services/ListService.js";
import _store from "../store.js"
import List from "../Models/List.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""

  _store.State.lists.forEach(list => template += list.Template)


  // let items = _store.State.lists
  // items.forEach(item => template += item.Template)
  document.getElementById("list").innerHTML = template
}

// function _drawTasks(itemId) {
//   let template = ""
//   let items = _store.State.items[itemId].tasks
//   items.forEach(item => template += item.taskTemplate)
//   document.getElementById("task").innerHTML = template
// }

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    console.log('Hi from constructor')
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems

  addList(event){
    event.preventDefault()
    let listData = event.target;
    console.log('add list bruh')
    let rawlistData = {
      title: listData.title.value,
    }
    ListService.addList(rawlistData)
    listData.reset()
    _drawLists(); 
  }

  addTask(event, itemId){
      event.preventDefault();
      let indextoAdd = _store.State.lists.findIndex(list => list.id == itemId)
      let taskData = event.target;
      console.log('add a task')
      let rawTaskData = taskData.task.value
      // let rawTaskData = {
      //   task: taskData.task.value,
      // }
      ListService.addTask(rawTaskData, indextoAdd)
      taskData.reset()
      _drawLists();
      // _drawTasks(itemId);
      
  }

  deleteItem(itemId){
    ListService.deleteItem(itemId)
    _drawLists()
  }

  deleteTask(itemId, tasktoRemove){
    ListService.deleteTask(itemId, tasktoRemove)
    _drawLists()
  }

}
