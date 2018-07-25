<template>
	<div>

		<md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
			<md-table-toolbar>
				<div class="md-toolbar-section-start">
					<h1 class="md-title">Tasks</h1>
				</div>

				<md-field md-clearable class="md-toolbar-section-end">
					<md-input placeholder="Search by task name..." v-model="search" @input="searchOnTable" />
				</md-field>
			</md-table-toolbar>

			<md-table-empty-state
			md-label="No tasks found"
			:md-description="`No task found for this '${search}' query. Try a different search term or create a new task.`">
			<md-button class="md-primary md-raised" @click="addNewTask">Create New task</md-button>
		</md-table-empty-state>

		<md-table-row slot="md-table-row" slot-scope="{ item }" :data-id="item.id">
			<md-table-cell md-label="Task" md-sort-by="name">
				<input type="text" :value="item.name" @click="changeTask(item.name, $event)">
			</md-table-cell>
			<md-table-cell md-label="Name">
				<input type="text" :value="findUserName(item.user_id)" >
			</md-table-cell>
			<md-table-cell md-label="Time" md-sort-by="time" @click="changeTime(item.time, $event)">
				<input type="text" :value="item.time" @click="changeTime(item.time, $event)">
			</md-table-cell>
			<md-table-cell md-label="Cost" md-sort-by="time" @click="changeTime(item.time, $event)">
				{{ findTaskCost(item.user_id) * item.time }}
			</md-table-cell>

			<md-table-cell md-label="Actions" md-sort-by="title">{{ item.title }}</md-table-cell>
		</md-table-row>



	</md-table>

	<div class="task_actions">

		<md-button v-show="showSaveButton === true" class="md-raised md-save" @click="saveTasks" >Сохранить</md-button>

		<md-button class="md-raised md-primary new_task" @click="addNewTask" >Новая задача</md-button>

	</div>


	<p>Всего задач: {{ tasks.length}}</p>

	<p>Всего людей: {{ userss.unique().length}}</p>

	<p>Всего часов: {{ tasks.sum((task) => {
		return +(task.time);
	}) }}</p>

	<p>Всего стоимость: {{ cost }}</p>



</div>
</template>

<script>

	const toLower = text => {
		return text.toString().toLowerCase()
	}

	const searchByName = (items, term) => {
		if (term) {
			return items.filter(item => toLower(item.name).includes(toLower(term)))
		}

		return items
	}

	export default {

		data() {
			return {
				name: 'TableSearch',
				showSaveButton: false,
				search: null,
				searched: [],
				count: 0,
				userss:  [
				{
					id:'4F0C3B4C-D8D8-4F01-9D9D-03758936EC05',
					name:'Иванов',
					price:500
				},
				{
					id:'A518B7DC-6BB2-4945-AC10-06A296660BDC',
					name:'Петров',
					price:250
				},
				{
					id:'7B1D6B3F-F986-4E5A-92FD-0CB361140A23',
					name:'Сидоров',
					price:1000
				}
				],
				tasks: [
				{
					id:'CAACE586-37BC-454E-8FAF-0FEC73C69969',
					name:'Разработка сервера',
					user_id:'4F0C3B4C-D8D8-4F01-9D9D-03758936EC05',
					time:42
				},
				{
					id:'A08E2244-E864-4304-BEDF-124D7A447135',
					name:'Разработка интерфейса',
					user_id:'A518B7DC-6BB2-4945-AC10-06A296660BDC',
					time:56
				},
				{
					id:'143B5AB2-C63F-4D56-880C-126BC5DFAE4A',
					name:'написание инструкции',
					user_id:'7B1D6B3F-F986-4E5A-92FD-0CB361140A23',
					time:2.5
				}
				]

			}

		},
		methods: {
			findUserName(user_id) {
				let user = this.userss.find(user => {
					return user.id === user_id;
				})
				return user.name;
			},
			findTaskCost(user_id) {
				let user = this.userss.find(user => {
					return user.id === user_id
				})
				return user.price
			},
			saveTasks() {
				console.dir(this.tasks)
			},
			changeTask(val, event) {
				let taskId = event.target.closest('.md-table-row').dataset.id
				// alert(event.target.closest('.md-table-row').dataset.id);
				let prevValue = val;
				let newValue = prompt('', val);

				if (prevValue != newValue) {
					var changedTask = this.tasks.find(task => {
						return task.id == taskId
					})
					console.dir(changedTask)
					changedTask.name = newValue;

					if(this.showSaveButton === false) {
						this.showSaveButton = true;
					}

				}


			},
			changeTime(val, event) {
				let taskId = event.target.closest('.md-table-row').dataset.id
				console.log('taskId =', taskId);
				// alert(event.target.closest('.md-table-row').dataset.id);
				let prevValue = val;
				let newValue = prompt('', val);

				if (prevValue != newValue) {
					console.log('ok')
					var changedTask = this.tasks.find(task => {
						return task.id == taskId
					})
					console.dir(changedTask)
					changedTask.time = newValue;

					if(this.showSaveButton === false) {
						this.showSaveButton = true;
					}

				}


			},
			changeUser(val, event) {
				let taskId = event.target.closest('.md-table-row').dataset.id
				// alert(event.target.closest('.md-table-row').dataset.id);
				let prevValue = val;
				let newValue = prompt('', val);

				if (prevValue != newValue) {
					var changedTask = this.tasks.find(task => {
						return task.id == taskId
					})
					console.dir(changedTask)
					changedTask.user = newValue;

					if(this.showSaveButton === false) {
						this.showSaveButton = true;
					}
				}


			},
			newUser () {
				window.alert('Noop')
			},
			searchOnTable () {
				this.searched = searchByName(this.tasks, this.search)
			},
			addNewTask() {

				var taskObj = {};
				taskObj.name = prompt("Задача?");
				taskObj.time = prompt("Сколько часов??");

				var userObj = {};
				userObj.name = prompt("Исполнитель?");

				if(this.userss.some(user => {return user.name === userObj.name} )) {
					var index = this.userss.findIndex(user => {return user.name === userObj.name});
					userObj.id = this.userss[index].id;
					userObj.price = this.userss[index].price;
					taskObj.user_id = this.userss[index].id;
				} else {
					userObj.id = 'some_user_id'+this.count;
					taskObj.id = 'some_user_id'+this.count;
					taskObj.user_id = 'some_user_id'+this.count;
					userObj.price = prompt("Стоимость в час??");
					this.count++;
				}

				this.tasks.push(taskObj);
				this.userss.push(userObj);

				let elems = document.querySelectorAll('.md-table-row');
				elems[elems.length-1].dataset.id = taskObj.id;

				if(this.showSaveButton === false) {
					this.showSaveButton = true;
				}

			}
		},
		created () {
			this.searched = this.tasks
		},
		computed: {
			cost() {
				var summ = 0;
				this.tasks.forEach(task => {
					var user = this.userss.find(user => {
						return user.id === task.user_id}
						)
					summ += task.time * user.price;
				})

				return summ;
			}
		}
	}
</script>

<style>
	body {
		text-align: center;
	}

	.md-table-content {
		height: auto !important;
	}

	.task_actions {
		margin: 32px 0;
	}

	.md-save {
		background: #43a047 !important;
		color: white !important;
	}

	.md-table-cell,
	.md-table-head {
		text-align: center;
	}

	.container
	{
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	.title
	{
		font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
		display: block;
		font-weight: 300;
		font-size: 100px;
		color: #35495e;
		letter-spacing: 1px;
	}
	.subtitle
	{
		font-weight: 300;
		font-size: 42px;
		color: #526488;
		word-spacing: 5px;
		padding-bottom: 15px;
	}
	.links
	{
		padding-top: 15px;
	}
</style>
