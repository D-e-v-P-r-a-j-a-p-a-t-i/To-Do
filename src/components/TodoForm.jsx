import React, { useState } from "react";
import { useToDo } from "../contexts/ToDoContext";

function TodoForm() {

    const [title, setTitle] = useState("")
    const {addToDo} = useToDo()

    const add = (e) => {
        e.preventDefault()

        if(!title) return

        addToDo({title, completed:false})

        setTitle("")
    }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
