import React from 'react'
import { useNotes } from '../../Context/noteContext'
import './newNote.css'

const NewNote = ({note}) => {
    const {archiveNote} = useNotes();
  return (
    <>
          
            <div className="display-card pd-1" style={{backgroundColor: note.selectedBackgroundColor, marginBottom: '-8rem'}} key={note._id}>
            <button className="btn-transparent btn-pinned"><span  className={`${note.pinned ? "note-active" : ""} material-icons btn-color`}>push_pin</span></button>
            <div className="container-input-text pdb-1">
                <h5 className="pdb-1">{note.title}</h5>
                <p className="pdb-1 text-display-card text-base">{note.description}</p>
            </div>
            <div className="edit-section" style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="tag">{note.tag}</div>
                <div className="priority">{note.priority}</div>

                <button className="btn-transparent" style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}><span className="material-icons-outlined btn-edit">edit</span></button>
    
                <button className="btn-transparent" onClick={() => {archiveNote(note._id, note)}}><span className="material-icons-outlined btn-archive">archive</span></button>
                <button className="btn-transparent"><span className="material-icons-outlined btn-delete">delete</span></button>
                        
            </div>
        </div>

            
        </>
  )
}

export default NewNote