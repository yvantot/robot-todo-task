import { useState } from 'react';

function TodoList() {
  const [newTask, setNewTask] = useState({ id: 0, task: 'Task', isAdded: true });
  const [tasks, setTasks] = useState([]);
  const [dialogues, setDialogues] = useState(`I'm your Todo-list robot`);
  const [emotion, setEmotion] = useState('^                  __                ^');
  const dialogueList = [
    "You're not a robot, take some rest.",
    'It gets easier!',
    "You did your best, and I'm proud of you.",
    'Wow, keep going!',
    "You're not failing, you're learning.",
  ];
  const emotions = [
    '▪                  vv                ▪',
    '^                  __                ^',
    '▪  ///             __          /// ▪',
    '▪                  O                 ▪',
    '-                  3                 -',
  ];

  function handleAddTask() {
    setDialogues(dialogueList[[Math.floor(Math.random() * emotions.length)]]);
    setEmotion(emotions[[Math.floor(Math.random() * emotions.length)]]);
    setNewTask((nt) => ({ ...nt, isAdded: true }));
    setTasks((t) => [...t, newTask]);
    setNewTask((nt) => ({ ...nt, id: nt.id + 1, task: 'Task' }));
    document.getElementById('inpNewTask').value = '';
  }
  function handleRemoveTask(index) {
    setDialogues(dialogueList[[Math.floor(Math.random() * emotions.length)]]);
    setEmotion(emotions[[Math.floor(Math.random() * emotions.length)]]);
    setTasks(tasks.filter((val) => val.id !== index));
  }
  function handleNewTaskChange(event) {
    setNewTask((t) => ({ ...t, task: event.target.value }));
  }
  function handleMoveUp(index) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
      setTasks(updatedTask);
    }
  }
  function handleMoveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setTasks(updatedTask);
    }
  }
  
  return (
    <div className='p-20 mx-auto block w-fit'>
      <div className="block w-72 mx-auto bg-slate-600 bg-[linear-gradient(0deg,rgba(23,52,75,1)0%,rgba(41,72,101,1)22%,rgba(43,129,147,1)100%)] text-white font-quicksand rounded-2xl mt-5 p-5 text-center min-h-80 relative shadow-lg">
        <input
          key={emotion}
          id="inpNewTask"
          className="w-full rounded-2xl p-6 py-10 outline-none text-green-500  bg-green-200 shadow-lg shadow-green-300 font-bold select-none"
          type="text"
          placeholder={emotion}
          onChange={(event) => handleNewTaskChange(event)}
        />
        <div className="mt-5 text-start mb-3 flex justify-between items-center">
          <p
            style={{ textShadow: '0px 0px 3px white' }}
            className="fade-in select-none inline-block shadow-inner font-bold shadow-slate-800 bg-[radial-gradient(circle,rgba(108,147,179,1)0%,rgba(93,132,168,1)22%,rgba(32,114,131,1)100%)] p-1 px-2 text-xs rounded m-1 text-slate-100 border-1 border-slate-900 max-w-48 font-quicksand tracking-wider" 
          >
            {dialogues}
          </p>
          <button
            className="bg-blue-500 rounded-full hover:bg-blue-400 focus:bg-blue-600 text-lg select-none h-6 w-6 font-bold text-slate-800 shadow-inner shadow-green-300"
            onClick={() => handleAddTask()}
          >
            +
          </button>
        </div>
        <ol className="mb-3">
          {tasks.map((task, index) => (
            <li
              key={task.id}
              id={'li' + task.id}
              className={
                'flex justify-between break-all text-start text-slate-200' +
                (task.isAdded && ' animate-fade-right animate-once')
              }
            >
              <div className="pl-2 gap-3 flex">
                <span className="select-none font-bold text-slate-400 w-3">{index % 2 == 0 ? 'O' : 'X'}</span>
                {task.task}
              </div>
              <span className="text-slate-800 flex gap-1 font-quicksand pl-3 select-none">
                <button className="font-bold text-red-400 hover:text-red-300 focus:text-red-500" onClick={() => handleRemoveTask(task.id)}>
                  X
                </button>
                <button className="text-lg text-green-400 hover:text-green-300 focus:text-green-500" onClick={() => handleMoveUp(index)}>
                  ▲
                </button>
                <button className="text-lg text-blue-400 hover:text-blue-300 focus:text-blue-500" onClick={() => handleMoveDown(index)}>
                  ▼
                </button>
              </span>
            </li>
          ))}
        </ol>
  
        <div className="w-1 h-1 bg-green-300 rounded absolute top-2 right-10"></div>
        <div className="w-1 h-1 bg-green-400 rounded absolute top-2 right-14"></div>
        <div className="w-1 h-1 bg-green-400 rounded absolute top-2 right-16"></div>
        <div className="w-5 h-2 bg-white rounded absolute top-6 right-10"></div>
        <div className="w-2 h-2 bg-white rounded absolute top-6 right-16"></div>
        <div className="w-14 h-2 bg-slate-800 rounded absolute bottom-4"></div>
        <div className="w-14 h-2 bg-slate-800 rounded absolute bottom-4 left-[30%]"></div>
        <div className='w-full h-20 bg-slate-900 rounded-2xl absolute top-[calc(100%-50px)] left-0 right-0 -z-10'></div>
        <div className='w-5 h-20 absolute bg-slate-700 rounded right-[calc(100%-14px)] top-16 -z-10'></div>
        <div className='w-5 h-10 absolute bg-slate-700 rounded right-[calc(100%-14px)] top-40 -z-10'></div>
          
      </div>
    </div>
  );
}

export default TodoList;
