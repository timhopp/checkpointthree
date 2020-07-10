import List from "../Models/List.js";
import _store from "../store.js"

//Public
class ListService {
deleteTask(itemId, tasktoRemove) {
  _store.deleteTask(itemId, tasktoRemove)
}
deleteItem(itemId) {
  _store.deleteItem(itemId);
}
addTask(rawTaskData, indextoAdd) {
   let rawTask = rawTaskData
  _store.addTask(rawTask, indextoAdd)
}
addList(rawlistData) {
  let newList = new List(rawlistData)
  _store.addList(newList)
  
}
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
constructor(){
  console.log('hi from service')
}
}

const SERVICE = new ListService();
export default SERVICE;
