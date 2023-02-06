import { useGetTasksQuery } from '../api/apiSlice'

const TaskList = () => {

    const { data, isError, isLoading, error } = useGetTasksQuery()

    if (isLoading) return <div>cargando...</div>
    else if (isError) return <div>Error {error} </div>

    console.log(data)


    return (
        <ul>
            {
                data.map(task => (
                    <li key={task.id}>
                        <h3>{task.name}</h3>
                        <p>{task.description}</p>
                        <button>Borrar</button>
                        <input type="checkbox" id={task.id} />
                        <label htmlFor={ task.id} >Completada</label>
                    </li>
                ))
            }
        </ul>
    )
}

export default TaskList
