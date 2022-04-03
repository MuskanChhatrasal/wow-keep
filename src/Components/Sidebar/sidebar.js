import React from 'react'
import './sidebar.css'
import { Link} from 'react-router-dom'

const Sidebar = () => {
//   const [notesPriority, setNotesPriority] = useState(false)
//   const [labelType, setLabelType] = useState(false)

//   const location = useLocation();

  return (
    <nav className="sidebar" style={{marginTop: '3rem'}}>
        
        <div>
            <div className="list-topic side-tags">
                <Link to='/notes'><i class="fas fa-clipboard" style={{marginRight: '0.75rem'}}></i><span>NOTES</span></Link>

               
            </div>
        </div>
      
        <div>
            <div className="list-topic side-tags">
                <Link to='/labels'><i class="fas fa-tag" style={{marginRight: '0.75rem'}}></i><span>LABELS</span></Link>
            </div>
        </div>

        <div>
            <div className="list-topic side-tags">
                <Link to='/archived'><i class="fas fa-archive" style={{marginRight: '0.75rem'}}></i><span>ARCHIVES</span></Link>
            </div>
        </div>

        <div>
            <div className="list-topic side-tags">
                <Link to='/trash'><i class="fas fa-trash" style={{marginRight: '0.75rem'}}></i><span>TRASH</span></Link>
            </div>
        </div>
        
    </nav>
  )
}

export default Sidebar