import TaskModal from "./components/TaskModal"
import TaskView,{Display} from "./components/TaskView"
import Topbar from "./components/Topbar"
import { useState } from "react"

function App() {
    const [active, setActive]=useState({btn1:true,btn2:false,btn3:false})
     const [showModal, setShowModal] = useState(false);

  function handleClick(id){
    id=== 'btn1'
    ?setActive({btn1:true,btn2:false,btn3:false})
    :id=== 'btn2'
    ?setActive({btn1:false,btn2:true,btn3:false})
    :setActive({btn1:false,btn2:false,btn3:true})
  }
  

  return (
    <div className="bg-[rgb(225,225,225)] min-h-screen pt-8">
      <Topbar/>
      <TaskView
      active={active}
      setActive={setActive}
      handleClick={handleClick}
      onAddTaskClick={() => setShowModal(true)}
      />
      <Display active={active} onEditTaskClick={() => setShowModal(true)}/>
         {showModal && <TaskModal onClose={() => setShowModal(false)} />}
      
    </div>
  )
}

export default App
