import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: [],
  
  
};

//NOTE You should not need to change the code from this point down


//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map(l => new List(l));
    _state = data;
  }
}
_loadState();

class Store {
  check(itemID, tasktoCheck) {
    let indextoCheck = _state.lists.findIndex(item => item.id == itemID )
    _state.lists[indextoCheck].tasks[tasktoCheck] = 'Done'
    console.log(_state.lists[indextoCheck])
    }
  
  deleteTask(itemId, tasktoRemove) {
    let indextoRemove = _state.lists.findIndex(item => item.id == itemId);
    if(indextoRemove < 0){
      console.log('Not Working')
    }
    _state.lists[indextoRemove].tasks.splice(tasktoRemove, 1)
    this.saveState()
  }
  deleteItem(itemId) {
    let indextoRemove = _state.lists.findIndex(item => item.id == itemId);
    if(indextoRemove < 0){
      console.log('Not Working')
    }
    _state.lists.splice(indextoRemove, 1)
    this.saveState()
  }
  addTask(newTask, indextoAdd) {
    _state.lists[indextoAdd].tasks.push(newTask)
    console.log(_state.lists)
    this.saveState()
  }
  addList(newList) {
    _state.lists.push(newList)
    console.log(_state.lists)
    this.saveState()
  }
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
