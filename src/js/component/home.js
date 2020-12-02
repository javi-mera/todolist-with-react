import React from "react";
//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: []
		};
	}
	render() {
		let addTask = value => {
			console.log(value);
			let newTask = {
				task: value.target.value,
				id: this.state.todos.length
			};
			if (value.keyCode == 13) {
				this.setState({
					todos: [...this.state.todos, newTask]
				});
				console.log(newTask, "enga");
			}
		};
		let removeItem = id => {
			this.setState({
				todos: this.state.todos.filter(element => element.id != id)
				//todos: this.state.todos.splice(task, 1)
			});
		};
		let tasksToRender = this.state.todos.map(task => {
			console.log(task, "yuhu");
			return (
				<li
					className="list-group-item col justify-content-between"
					key={task.id}>
					<div className="row justify-content-between">
						<label className="col-11">{task.task}</label>
						<div className="col-1">
							<button
								onClick={() => removeItem(task.id)}
								className=""
								value="">
								x
							</button>
						</div>
					</div>
				</li>
			);
		});
		return (
			<div>
				<input
					placeholder="What needs to be done?"
					onKeyDown={event => addTask(event)}
				/>
				<ul>{tasksToRender}</ul>
				<h3 className="text-center">
					You have {this.state.todos.length} things to do!
				</h3>
			</div>
		);
	}
}
