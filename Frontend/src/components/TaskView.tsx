import {PendingTasks, TodayTasks, CompletedTasks} from './Tasks'

export default function TaskView({active,handleClick,onAddTaskClick}){

 return(
  <>
    <div className='pt-8 w-2/5 m-auto text-center'>
     <button  className={active.btn1?'btn !text-white !bg-green-900': 'btn ' } onClick={()=>handleClick('btn1')}>TODAY</button>
      <button  className={active.btn2?'btn !text-white !bg-green-900': 'btn ' } onClick={()=>handleClick('btn2')}>PENDING</button>
       <button  className={active.btn3?'btn !text-white !bg-green-900': 'btn ' } onClick={()=>handleClick('btn3')}>COMPLETED</button>
  </div>
  <div className='flex justify-between w-3/5 m-auto mt-8'>
    <h3 className=''>Tasks</h3>
    <button className='font-bold btn !text-white !bg-green-800' onClick={onAddTaskClick}>+Add Task</button>
  </div>
  </>
 )
}

export function Display({ active, onEditTaskClick }){
  return(
    <div className='w-3/5 p-8 m-auto rounded-lg mt-8 h-screen bg-white'>
      <div className=' min-h-full m-auto rounded-xl border'>
        {active.btn1
        ?TodayTasks.map((today,index)=>{
          return(
            <div  key={`${today.name}-${index}`} className='border m-1 rounded h-16 px-2 flex flex-row justify-between items-center'>
            <input type='checkbox'/>
            <div> {today.name}</div>
            <div>&#128337; {today.date}</div>     
            <button className='bg-gray-300 rounded w-9 h-9'  onClick={onEditTaskClick}>🖊</button>
            </div>
          )

        })
        :active.btn2
        ?PendingTasks.map((pending,index)=>{
          return(
            <div  key={`${pending.name}-${index}`} className='border m-1 rounded h-16 px-2 flex flex-row justify-between items-center'>
            <input type='checkbox'/>
            <div> {pending.name}</div>
            <div >&#128337; {pending.date}</div>     
            <button className='bg-gray-300 rounded w-9 h-9'  onClick={onEditTaskClick}>🖊</button>
            </div>
          )

        })
        :CompletedTasks.map((completed,index)=>{
          return(
            <div  key={`${completed.name}-${index}`} className='border m-1 rounded h-16 px-2 flex flex-row justify-between items-center'>
            <input type='checkbox'/>
            <div> {completed.name}</div>
            <div>&#128337; {completed.date}</div>     
            <button className='bg-gray-300 rounded w-9 h-9'  onClick={onEditTaskClick}>🖊</button>
            </div>
          )

        })}

      </div>

    </div>
  )

}