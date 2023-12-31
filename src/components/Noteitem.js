import React,{useContext} from 'react'
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;

    return (
        <div className='col-md-3'>
            <div className="card my-2">
                    <div className="card-body">
                        <div className="d-flex align-items-center">
                        <h5 className="card-title">{props.note.title}</h5>
                        <i className="fa-solid fa-pen-to-square fa-lg mx-4" onClick={()=>{props.updateNote(props.note)}}></i>
                        <i className="fa-solid fa-trash-can fa-lg " onClick={()=>{deleteNote(props.note._id);props.showAlert("Deleted Successfully","info");}}></i>
                        </div>
                        <p className="card-text">{props.note.description}</p>
                    </div>
            </div>
        </div>
    )
}

export default Noteitem
