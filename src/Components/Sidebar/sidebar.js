import React, {useState} from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [notesPriority, setNotesPriority] = useState(false)
  const [labelType, setLabelType] = useState(false)

  return (
    <nav className="sidebar" style={{marginTop: '3rem'}}>
        
        <div>
            <div className="list-topic side-tags">
                <Link to='/notes'><i class="fas fa-clipboard" style={{marginRight: '0.75rem'}}></i><span onClick={()=>setNotesPriority(!notesPriority)}>NOTES</span></Link>

                {notesPriority && <div className='priority-radio'>
                <div>
                    <input type='radio' name='priority-notes' /><span>All</span>
                </div>
                <div>
                    <input type='radio' name='priority-notes' /><span>High Priority</span>
                </div>
                <div>
                    <input type='radio' name='priority-notes' /><span>Low Priority</span>
                </div>
                </div>}
            </div>
        </div>
      
        <div>
            <div className="list-topic side-tags">
                <Link to='/labels'><i class="fas fa-tag" style={{marginRight: '0.75rem'}}></i><span onClick={()=>setLabelType(!labelType)}>LABELS</span></Link>

                {labelType && <div className='priority-radio'>
                <div>
                    <input type='radio' name='label-type' /><span>All</span>
                </div>
                <div>
                    <input type='radio' name='label-type'/><span>Home</span>
                </div>
                <div>
                    <input type='radio' name='label-type' /><span>Work</span>
                </div>
                <div>
                    <input type='radio' name='label-type' /><span>Personal</span>
                </div>
                </div>}
            </div>
        </div>

        <div>
            <div className="list-topic side-tags">
                <Link to='/archived'><i class="fas fa-archive" style={{marginRight: '0.75rem'}}></i><span>ARCHIVES</span></Link>
            </div>
        </div>
        
    </nav>
  )
}

export default Sidebar