import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/sidebar'
import { ColorPalette } from '../../Components/ColorPalette/colorPalette'

const Home = () => {
  return (
     <div className='note-container'>
         <Sidebar />

     <div
      style={{ backgroundColor: 'white'}}
      className="input-container cont-shadow"
    >
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
          />
          <textarea
            rows="5"
            className="text"
            type="text"
            placeholder="Take a note..."
          />
        </div>
        <div>
          
            <span className="material-icons-outlined pin-icon">
              push_pin
            </span>
       
        </div>
      </div>
      <div className="edit-section-container">
        <div className="edit-section">
          <select
            className="tag"
          >
            <option value="Label" hidden>
              Label
            </option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Exercise">Exercise</option>
            <option value="Chores">Chores</option>
            <option value="Health">Health</option>
          </select>
          <select
            className="tag"
          >
            <option value="Priority" hidden>
              Priority
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <ColorPalette />
        </div>
        <button
          className='add-btn'
        >
          Add
        </button>
      </div>
    </div>
     </div>
  )
}

export default Home