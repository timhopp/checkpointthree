import { generateId } from "../utils.js";
import { bgColor } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.title = data.title;
    this.tasks = data.tasks || [];
    this.bg = data.bg || bgColor();
   
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get Template(){
    let template =`
    
    <div id= '${this.id}' class="col-3 col-md-5 col-sm-12 card text-main m-3 ${this.bg}">
    <div class= 'row justify-content-end pt-3'>
    <div class= "col-8">
      <h3>${this.title}</h3>
       </div>
      <div class="col-4 text-right">
      <button type="button" class="btn btn-outline-danger" onclick="app.listController.deleteItem(
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
    <div class="container-fluid">
    <div class="row justify-content-left">
    
     <div class="col-10 text-left mr-1">
     
     <h5 class="p-2 text-sec bg-sec rounded"><div class="form-check">
     <input class="form-check-input" type="checkbox" onclick="app.listController.check('${this.id}' '${i}')" value="" id="defaultCheck1">
     
   </div>
   &nbsp;&nbsp;&nbsp;&nbsp;-${tasks}
     </h5>
    </div>
    <div class="col-1">
    <button type="button btn text-danger" class="close" onclick="app.listController.deleteTask(
        '${this.id}', '${i}')">
      <span>&times;</span>
    </button>

    </div>
    </div>
    </div>
    
    
     
  `)

    template+= '</div>'

    return template 
  }

}

