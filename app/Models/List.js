import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.title = data.title;
    this.tasks = data.tasks || [];
   
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template(){
    let template =`
    <div class="col-3 card bg-info text-white m-3">
    <div class= 'row justify-content-end pt-3'>
    <div class= "col-8">
      <h3>${this.title}</h3>
       </div>
      <div class="col-4 text-right">
      <button type="button" class="btn btn-danger" onclick="app.listController.deleteItem(
        '${this.id}')">Remove</button></div>
      </div>
      
      <form onsubmit="app.listController.addTask(event, '${this.id}')">
        <div class="form-group">
          <label for="task"></label>
          <input type="text" name="task" class="form-control" placeholder="Add Task">
      </form>
    </div>


    `
    this.tasks.forEach((tasks, i) => template += `
    <div class="row justify-content-center p-2">
     <div class="col-8 text-left">
     <h5>-${tasks}
     </h5>
    </div>
    <div clas="col-4 text-right">
    <button type="button" class="btn btn-danger" onclick="app.listController.deleteTask(
      '${this.id}', '${i}')">Remove</button>
    </div>
    </div>
    
    
    
     
  `)

    template+= '</div>'

    return template 
  }

}

