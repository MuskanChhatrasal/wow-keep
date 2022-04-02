import React, {useState} from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/sidebar'
import { ColorPalette } from '../../Components/ColorPalette/colorPalette'
import { useNotes } from '../../Context/noteContext'
import { useAuth } from '../../Context/authContext'
import NewNote from '../../Components/NewNote/newNote'
import { EditCard } from '../../Components/EditNote/editNote'

const Home = () => {

const {addNote} = useNotes();
const [inputCardDetails, setInputCardDetails] = useState({
        pinned: false,
        title: "",
        description: "",
        tag: "Tag",
        priority: "Priority",
        selectedBackgroundColor: "#faf8f8",
    })

  const {authState} = useAuth();
  const {notes} = authState;


	const [edit, setEdit] = useState({
		isEdit: false,
		editItem: {
			_id: null,
			pinned: false,
			title: "",
			description: "",
			tag: "Tag",
			priority: "Priority",
			selectedBackgroundColor: "#faf8f8",
		}
	});
  
  return (
    <>
     <div className='note-container'>
         <Sidebar />

     <div style={{display: 'flex', flexDirection: 'column'}}>
     <div
      style={{ backgroundColor: 'white', width: '38rem'}}
      className="input-container cont-shadow"
    >
      <div>
      <div className="input-text-section-container">
        <div className="input-text-section">
          <textarea
            role="textbox"
            type="text"
            placeholder="Title"
            autoFocus
            rows="1"
            className="text title-text-style"
            maxLength="15"
            onChange={(e)=>setInputCardDetails({...inputCardDetails, title: e.target.value})}
          />
          <textarea
            rows="5"
            className="text"
            type="text"
            placeholder="Take a note..."
            onChange={(e)=>setInputCardDetails({...inputCardDetails, description: e.target.value})}
          />
        </div>
        <div>
          {inputCardDetails.pinned ? (
            <span
              onClick={() =>
                setInputCardDetails({ ...inputCardDetails, pinned: !inputCardDetails.pinned })
              }
              className="material-icons pin-icon active"
            >
              push_pin
            </span>
          ) : (
            <span
              onClick={() =>
               setInputCardDetails({ ...inputCardDetails, pinned: !inputCardDetails.pinned })
              }
              className="material-icons-outlined pin-icon"
            >
              push_pin
            </span>
          )}
       
        </div>
      </div>
      <div className="edit-section-container">
        <div className="edit-section">
          <select
            className="tag"
            onChange={(e)=>setInputCardDetails({...inputCardDetails, tag: e.target.value})}
          >
            <option value="Label" hidden>
              Label
            </option>
            <option value="Tag" hidden>Tag</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
          <select
            className="tag"
            onChange={(e)=>setInputCardDetails({...inputCardDetails, priority: e.target.value})}
          >
            <option value="Priority" hidden>
              Priority
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <ColorPalette  setInputCardDetails={setInputCardDetails}
                        inputCardDetails={inputCardDetails}   />
        </div>
        <button
          className='add-btn'
           onClick={()=>{
                        addNote({...inputCardDetails,
                                    tag: inputCardDetails.tag === "Tag" ? "Home" : inputCardDetails.tag,
                                    priority: inputCardDetails.priority === "Priority" ? "Low" : inputCardDetails.priority
                                    })
                        setInputCardDetails({pinned: false,
                                  title: "",
                                  description: "",
                                  tag: "Tag",
                                  priority: "Priority",
                                  selectedBackgroundColor: "#faf8f8",}) 
                                    }}>
          Add
        </button>
      </div>
    </div>
     </div>
        <div className="other">
          {notes
            .map((note) => {
              return (
                <NewNote note={note} edit={edit} setEdit={setEdit} />
              );
            })}
        </div>

        
        {edit.isEdit && <EditCard edit={edit} setEdit={setEdit} />}
      </div>
      </div>
       )

     </>
  )
}

export default Home