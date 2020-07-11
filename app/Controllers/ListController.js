import ListService from "../Services/ListService.js";
import _store from "../store.js"
import List from "../Models/List.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""

  _store.State.lists.forEach(list => template += list.Template)


  // let items = _store.State.lists
  // items.forEach(item => template += item.Template)
  document.getElementById("list").innerHTML = template
}

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})




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
  check(itemID, tasktoCheck){
   _store.check(itemID, tasktoCheck);  
  }


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
    console.log(_store.State.lists)
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
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "This will be... FOREVER!!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        ListService.deleteItem(itemId)
        _drawLists()
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your list is gone forever. ',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your list lives on!',
          'error'
        )
      }
    })

    
    
    _drawLists()
    
  }

  deleteTask(itemId, tasktoRemove){
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "This will be FOREVER!!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        ListService.deleteTask(itemId, tasktoRemove)
        _drawLists()
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your task is gone... FOREVER! ',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your task lives on!',
          'error'
        )
      }
    })
    
    _drawLists()
  }

}
