webpackJsonp([0],{"+CoQ":function(t,e,s){"use strict";var n=function(t){return t.toString().toLowerCase()};e.a={data:function(){return{name:"TableSearch",showSaveButton:!1,search:null,searched:[],count:0,users:[{id:"4F0C3B4C-D8D8-4F01-9D9D-03758936EC05",name:"Иванов",price:500},{id:"A518B7DC-6BB2-4945-AC10-06A296660BDC",name:"Петров",price:250},{id:"7B1D6B3F-F986-4E5A-92FD-0CB361140A23",name:"Сидоров",price:1e3}],tasks:[{id:"CAACE586-37BC-454E-8FAF-0FEC73C69969",name:"Разработка сервера",user_id:"4F0C3B4C-D8D8-4F01-9D9D-03758936EC05",time:42},{id:"A08E2244-E864-4304-BEDF-124D7A447135",name:"Разработка интерфейса",user_id:"A518B7DC-6BB2-4945-AC10-06A296660BDC",time:56},{id:"143B5AB2-C63F-4D56-880C-126BC5DFAE4A",name:"написание инструкции",user_id:"7B1D6B3F-F986-4E5A-92FD-0CB361140A23",time:2.5}]}},methods:{findUserName:function(t){return this.users.find(function(e){return e.id===t}).name},findTaskCost:function(t){return this.users.find(function(e){return e.id===t}).price},saveTasks:function(){console.log("-------------------"),console.log("ОТПРАВКА НА СЕРВЕР"),console.log("TASKS"),console.dir(this.tasks),console.log("USERS"),console.dir(this.users)},changeTask:function(t,e){var s=e.target.closest(".md-table-row").dataset.id,n=prompt("",t);if(t!=n){var a=this.tasks.find(function(t){return t.id==s});console.dir(a),a.name=n,!1===this.showSaveButton&&(this.showSaveButton=!0)}},changeTime:function(t,e){var s=e.target.closest(".md-table-row").dataset.id,n=prompt("",t);if(t!=n){var a=this.tasks.find(function(t){return t.id==s});if(!/^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/.test(n))return alert("Не сохранено, нужно ввести число"),!1;a.time=n,!1===this.showSaveButton&&(this.showSaveButton=!0)}},changeUser:function(t,e){var s=prompt("",t);if(t!=s){var n=this.users.findIndex(function(e){return e.name==t}),a=this.users.find(function(t){return t.name==s});if(a){var i=e.target.closest(".md-table-row").dataset.id;this.tasks.find(function(t){return t.id==i}).user_id=a.id,this.users.splice(this.tasks.indexOf(t),1)}else this.users[n].name=s;!1===this.showSaveButton&&(this.showSaveButton=!0)}},searchOnTable:function(){this.searched=function(t,e){return e?t.filter(function(t){return n(t.name).includes(n(e))}):t}(this.tasks,this.search)},addNewTask:function(){document.getElementById("search").value="",this.search=null,this.searched=this.tasks;var t={};t.name=prompt("Задача?"),t.time=prompt("Сколько часов??");var e=/^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;if(!e.test(t.time))return alert("Не сохранено, нужно ввести число"),!1;var s={};if(s.name=prompt("Исполнитель?"),this.users.some(function(t){return t.name===s.name})){var n=this.users.findIndex(function(t){return t.name===s.name});s.id=this.users[n].id,s.price=this.users[n].price,t.user_id=this.users[n].id}else{if(s.id="some_user_id_"+this.count,t.id="some_task_id_"+this.count,t.user_id="some_user_id_"+this.count,s.price=+prompt("Стоимость в час??"),!e.test(s.price))return alert("Не сохранено, нужно ввести число"),!1;this.count++}this.tasks.push(t),this.users.push(s),!1===this.showSaveButton&&(this.showSaveButton=!0),setTimeout(function(){},200)},deleteTask:function(t){var e=t.target.closest(".md-table-row").dataset.id,s=this.tasks.find(function(t){return t.id==e});this.tasks.splice(this.tasks.indexOf(s),1),!1===this.showSaveButton&&(this.showSaveButton=!0)},blur:function(t){t.target.blur()}},created:function(){this.searched=this.tasks},computed:{cost:function(){var t=this,e=0;return this.tasks.forEach(function(s){var n=t.users.find(function(t){return t.id===s.user_id});e+=s.time*n.price}),e}}}},"/TYz":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("+CoQ"),a=s("iA8U"),i=!1;var r=function(t){i||s("XaLY")},o=s("VU/8")(n.a,a.a,!1,r,null,null);o.options.__file="pages\\index.vue",e.default=o.exports},XaLY:function(t,e,s){var n=s("avLv");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s("rjj0")("d284e844",n,!1,{sourceMap:!1})},avLv:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,"body{text-align:center}.md-table-content{height:auto!important}.task_actions{margin:32px 0}.md-save{background:#43a047!important;color:#fff!important}.container,.md-table-cell,.md-table-head{text-align:center}.container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},iA8U:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("md-table",{attrs:{"md-sort":"name","md-sort-order":"asc","md-card":"","md-fixed-header":""},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var n=e.item;return s("md-table-row",{attrs:{"data-id":n.id}},[s("md-table-cell",{attrs:{"md-label":"Task","md-sort-by":"name"}},[s("input",{attrs:{type:"text"},domProps:{value:n.name},on:{click:function(e){t.changeTask(n.name,e)},focus:function(e){t.blur(e)}}})]),s("md-table-cell",{attrs:{"md-label":"Name"}},[s("input",{attrs:{type:"text"},domProps:{value:t.findUserName(n.user_id)},on:{click:function(e){t.changeUser(t.findUserName(n.user_id),e)},focus:function(e){t.blur(e)}}})]),s("md-table-cell",{attrs:{"md-label":"Time","md-sort-by":"time"}},[s("input",{attrs:{type:"text"},domProps:{value:n.time},on:{focus:function(e){t.blur(e)},click:function(e){t.changeTime(n.time,e)}}})]),s("md-table-cell",{attrs:{"md-label":"Cost"},on:{click:function(e){t.changeTime(n.time,e)}}},[t._v("\n\t\t\t\t"+t._s(t.findTaskCost(n.user_id)*n.time)+"\n\t\t\t")]),s("md-table-cell",{attrs:{"md-label":"Actions"}},[s("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){t.deleteTask(e)}}},[t._v("Удалить")])],1)],1)}}]),model:{value:t.searched,callback:function(e){t.searched=e},expression:"searched"}},[s("md-table-toolbar",[s("div",{staticClass:"md-toolbar-section-start"},[s("h1",{staticClass:"md-title"},[t._v("Tasks")])]),s("md-field",{staticClass:"md-toolbar-section-end",attrs:{"md-clearable":""}},[s("md-input",{attrs:{id:"search",placeholder:"Search by task name..."},on:{input:t.searchOnTable},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),s("md-table-empty-state",{attrs:{"md-label":"No tasks found","md-description":"No task found for this '"+t.search+"' query. Try a different search term or create a new task."}})],1),s("div",{staticClass:"task_actions"},[s("md-button",{directives:[{name:"show",rawName:"v-show",value:!0===t.showSaveButton,expression:"showSaveButton === true"}],staticClass:"md-raised md-save",on:{click:t.saveTasks}},[t._v("Сохранить")]),s("md-button",{staticClass:"md-raised md-primary new_task",on:{click:t.addNewTask}},[t._v("Новая задача")])],1),s("p",[t._v("Всего задач: "+t._s(t.tasks.length))]),s("p",[t._v("Всего людей: "+t._s(t.users.unique().length))]),s("p",[t._v("Всего часов: "+t._s(t.tasks.sum(function(t){return+t.time})))]),s("p",[t._v("Всего стоимость: "+t._s(t.cost))])],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a}});