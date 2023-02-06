import { useCreateTaskMutation } from "../api/apiSlice"

const TaskForm = () => {

    const [createTask] = useCreateTaskMutation()

    const handleSubmit = e => {
        e.preventDefault()
        let name = e.target.elements.name.value.trim()
        let description = e.target.elements.description.value.trim()
        let completed = e.target.elements.completed.checked
        createTask({ name, description, completed })
        console.log(name, description, completed)
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <input type="text" name="description" />
            <input type="checkbox" name="completed" id="" />
            <button>Agregar tarea</button>
        </form>
    )
}

export default TaskForm
