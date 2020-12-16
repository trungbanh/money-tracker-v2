import { makeObservable, observable, computed, action, runInAction } from "mobx"
import { createContext } from "react"

class TodoService {
  @observable todo: any = [];

  constructor() {
    makeObservable(this);
  }

  @action
  loadTodos () {
    runInAction(()=> {
      this.todo = require('../mock-server/home.json');
    })
  }

  @action
  addNewTodo(itemTodo: any){
    runInAction(()=>{
      this.todo.rows.push(itemTodo);
    })
  }
}

export const todoStore = createContext(new TodoService());