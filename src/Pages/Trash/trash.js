import React from 'react'
import Sidebar from '../../Components/Sidebar/sidebar';
import { useAuth } from '../../Context/authContext';
import { useTrash } from '../../Context/TrashContext';
import './trash.css'



const Trash = () => {

  const {authState} = useAuth();
  const {trashedNotes} = authState;
  const {restoreFromTrash, removeFromTrash} = useTrash();
  return (
    <>
    <Sidebar />
    <div className='archived-main-container'>
    {trashedNotes.length === 0 ? <h1 style={{marginTop: '-35rem', marginLeft: '40rem'}}>No Trashed Notes</h1>
      :
      trashedNotes.map((note)=>{
      return (
         <div className='archived-container' style={{marginTop: '-46.5rem', marginBottom: '40rem'}}>
        <div className="archived-display-card pd-1" style={{backgroundColor: note.selectedBackgroundColor}} key={note._id}>
            <div className="container-input-text pdb-1">
                <h5 className="pdb-1">{note.title}</h5>
                <p className="pdb-1 text-display-card text-base">{note.description}</p>
            </div>
            <div className="edit-section" style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="tag">{note.tag}</div>
                <div className="priority">{note.priority}</div>
                <button className="btn-transparent" onClick={() => {restoreFromTrash(note)}}><span className="material-icons-outlined btn-archive">unarchive</span></button>
                <button className="btn-transparent" onClick={() => {removeFromTrash(note._id)}}><span className="material-icons-outlined btn-delete">delete</span></button>                       
            </div>
        </div>
        <div className="spacer-2"></div>
    </div>
      )
    })}
    </div>
    
    
    </>
  )
}

export default Trash