(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{50:function(t,e,s){"use strict";s.r(e);var o={name:"TodoList",data:()=>({todos:{isLoading:!1,data:[]},createTodoForm:{isSubmitting:!1,isCreated:!1,name:void 0,errors:[]},editTodoForm:{isSubmitting:!1,isUpdated:!1,uuid:void 0,name:void 0,errors:[]},error:void 0}),mounted(){this.loadTodos()},methods:{showEditTodoForm(t){this.editTodoForm.name=t.name,this.editTodoForm.uuid=t.uuid,$("#editTodoItemModal").modal("show")},loadTodos(){this.todos.isLoading=!0,axios.get("/todos").then(t=>{this.todos.data=t.data}).catch(t=>{console.log(t.message),this.error="Unable to load todos. View log for more information"}).finally(()=>{this.todos.isLoading=!1})},addTodo(){this.createTodoForm.isSubmitting=!0,axios.post("/todos",this.createTodoForm).then(t=>{this.createTodoForm.errors=[],this.createTodoForm.name=void 0,this.createTodoForm.isCreated=!0,this.loadTodos()}).catch(t=>{t.response&&422===t.response.status?this.createTodoForm.errors=_.flatten(_.toArray(t.response.data.errors)):(console.log(t.message),this.error="Unable to add todo. View log for more information")}).finally(()=>{this.createTodoForm.isSubmitting=!1})},updateTodo(){this.editTodoForm.isSubmitting=!0,axios.put("/todos/"+this.editTodoForm.uuid,this.editTodoForm).then(t=>{$("#editTodoItemModal").modal("hide"),this.editTodoForm.name=void 0,this.editTodoForm.uuid=void 0,this.editTodoForm.isUpdated=!0,this.loadTodos()}).catch(t=>{t.response&&422===t.response.status?this.editTodoForm.errors=_.flatten(_.toArray(t.response.data.errors)):(console.log(t.message),this.error="Unable to update todo. View log for more information")}).finally(()=>{this.editTodoForm.isSubmitting=!1})},destroy(t){axios.delete("/todos/"+t.uuid).then(t=>{this.loadTodos()}).catch(t=>{console.log(t.message),this.error="Unable to delete todo. View log for more information"})}}},a=s(2),i=Object(a.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"p-3",attrs:{id:"todo-container"}},[t._m(0),t._v(" "),s("section",{attrs:{id:"todo-errors"}},[t.createTodoForm.errors.length>0?s("div",{staticClass:"alert alert-warning alert-dismissible fade show",attrs:{role:"alert"}},[t._l(t.createTodoForm.errors,(function(e,o){return s("span",{key:o},[t._v(t._s(e))])})),t._v(" "),t._m(1)],2):t._e(),t._v(" "),t.createTodoForm.isCreated?s("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[s("span",[t._v("Todo item created successfully")]),t._v(" "),t._m(2)]):t._e(),t._v(" "),t.editTodoForm.isUpdated?s("div",{staticClass:"alert alert-success alert-dismissible fade show",attrs:{role:"alert"}},[s("span",[t._v("Todo item updated successfully")]),t._v(" "),t._m(3)]):t._e()]),t._v(" "),s("section",{staticClass:"my-3",attrs:{id:"add-todo-form"}},[s("form",[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.createTodoForm.name,expression:"createTodoForm.name"}],staticClass:"form-control mr-3",attrs:{minlength:"5",maxlength:"50",placeholder:"Enter todo name and press enter",type:"text"},domProps:{value:t.createTodoForm.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||t.$set(t.createTodoForm,"name",e.target.value)}}}),t._v(" "),t.createTodoForm.isSubmitting?s("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:""}},[s("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Loading...")])]):s("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.addTodo(e)}}},[t._v("Add")])])])]),t._v(" "),s("section",{attrs:{id:"todo-actions"}}),t._v(" "),s("section",{attrs:{id:"todo-list"}},[t.todos.isLoading||t.todos.data.length<=0?s("ul",{staticClass:"list-group"},[t.todos.isLoading?s("div",{staticClass:"text-center"},[t._m(4)]):t._e(),t._v(" "),t.todos.isLoading||0!==t.todos.data.length?t._e():s("li",{staticClass:"list-group-item list-group-item-action list-group-item-warning"},[t._v("\n                            No todo items found.\n                        ")])]):t._e(),t._v(" "),!t.todos.isLoading&&t.todos.data.length>0?s("ul",{staticClass:"list-group"},t._l(t.todos.data,(function(e){return s("li",{key:e.uuid,staticClass:"list-group-item"},[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[t._v("\n                                "+t._s(e.name)+"\n                                "),s("span",{staticClass:"d-flex justify-content-between align-items-center"},[s("a",{staticClass:"text-success mr-2",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.showEditTodoForm(e)}}},[s("i",{staticClass:"fa fa-edit"}),t._v(" Edit\n                                    ")]),t._v(" "),s("a",{staticClass:"text-danger",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.destroy(e)}}},[s("i",{staticClass:"fa fa-trash-o"}),t._v(" Delete\n                                    ")])])]),t._v(" "),s("div",{staticClass:"d-flex w-100 justify-content-between"},[s("small",{staticClass:"text-muted"},[t._v("Created")]),t._v(" "),s("small",{staticClass:"text-muted"},[t._v(t._s(e.created_at))])])])})),0):t._e()])])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"editTodoItemModal",tabindex:"-1",role:"dialog","aria-labelledby":"editTodoItemModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(5),t._v(" "),s("div",{staticClass:"modal-body"},[s("section",{staticClass:"mb-3",attrs:{id:"edit-todo-errors"}},[t.editTodoForm.errors.length>0?s("div",{staticClass:"alert alert-warning alert-dismissible fade show",attrs:{role:"alert"}},[t._l(t.editTodoForm.errors,(function(e,o){return s("span",{key:o},[t._v(t._s(e))])})),t._v(" "),t._m(6)],2):t._e()]),t._v(" "),s("section",{attrs:{id:"edit-todo"}},[s("form",[s("div",{staticClass:"d-flex justify-content-between align-items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.editTodoForm.name,expression:"editTodoForm.name"}],staticClass:"form-control mr-3",attrs:{minlength:"5",maxlength:"50",placeholder:"Enter todo name and press enter",type:"text"},domProps:{value:t.editTodoForm.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTodo(e)},input:function(e){e.target.composing||t.$set(t.editTodoForm,"name",e.target.value)}}}),t._v(" "),t.editTodoForm.isSubmitting?s("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:""}},[s("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Loading...")])]):s("button",{staticClass:"btn btn-success",on:{click:function(e){return e.preventDefault(),t.updateTodo(e)}}},[t._v("Update")])])])])]),t._v(" "),t._m(7)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"mt-3",attrs:{id:"todo-header"}},[e("h3",{staticClass:"text-center"},[this._v("TodoList Web App")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Loading...")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"editTodoItemModalLabel"}},[this._v("Update TodoItem")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}],!1,null,null,null);e.default=i.exports}}]);
//# sourceMappingURL=4.js.map