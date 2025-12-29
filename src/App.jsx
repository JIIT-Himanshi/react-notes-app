import React, {useState} from 'react'

const App = () => {

  const [note, setNote] = useState('');
  const [details, setDetails] = useState('');

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({note, details});
    setTask(copyTask);

    console.log(note, details);
    setNote('');
    setDetails('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form className='flex lg:w-1/2 flex-col gap-4 p-10' onSubmit={(e) => submitHandler(e)}>
        <h1 className='text-3xl font-bold'> Add App </h1>
        <input
        type="text" 
        placeholder="Enter your note here"
        className='px-4 py-2 w-full border-2 outline-none font-medium rounded'
        value={note}
        onChange={(e) => {
          setNote(e.target.value);
        }}
        />

        <textarea 
        placeholder="Additional details"
        className='px-4 py-2 h-32 w-full border-2 outline-none font-medium rounded'
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
        }}
        ></textarea>

        <button 
        type="submit"
        className='bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-800 transition'>
        Add Note
        </button>
      </form>

      <div className='gap-5 lg:w-1/2 bg-gray-800 pt-10 pl-8 pr-8 lg:border-l-2'>
        <h1 className='text-3xl font-bold'> Recent Notes </h1>
        <div className='flex flex-wrap gap-5 mt-8 h-full overflow-auto'>
          {task.map(function (elem, idx) {

          return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/037/152/672/small/sticky-note-paper-background-free-png.png')]">

          <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.note}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
          </div>

          <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>

          })}


          {/* <div className='h-51 w-43 rounded-2xl bg-white'> </div>
          <div className='h-53 w-43 rounded-2xl bg-white'> </div>
          <div className='h-53 w-43 rounded-2xl bg-white'> </div>
          <div className='h-53 w-43 rounded-2xl bg-white'> </div>
          <div className='h-53 w-43 rounded-2xl bg-white'> </div>
          <div className='h-53 w-43 rounded-2xl bg-white'> </div> */}

        </div>
      </div>
    </div>
  )
}

export default App