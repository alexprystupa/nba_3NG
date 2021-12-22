

const AddPlayer = () => {
    return (
        <form className = 'form-control'>
            <div className = 'form-control'>
                <label>Task</label>
                <input 
                    type = 'text' 
                    placeholder = 'Add Task' 
                    //value = {text}
                    //onChange = {(e) => setText(e.target.value)}
                />
            </div>
            
        </form>
    )
}

export default AddPlayer
