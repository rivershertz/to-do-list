import AddTaskBar from "./AddTaskBar"
import ToDoList from "./ToDoList"

function Main () {
    return (
        <div className="w-1/2 mx-auto">
            <h1 className="text-6xl text-center mb-16 shadow-md rounded-full">Things I Want To Do</h1>
            <AddTaskBar />
            <ToDoList />
        </div>
    )
}

export default Main