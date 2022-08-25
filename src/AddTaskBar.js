function AddTaskBar () {
    return (
        <div className='w-full mb-7 flex flex-row space-x-5'>
            <input className="flex-grow rounded-full shadow-md" placeholder="Add a new task!"></input>
            <button className='bg-white w-20 border border-slate-200 rounded-full shadow-md hover:bg-slate-100'>+</button>
        </div>
    )
}

export default AddTaskBar