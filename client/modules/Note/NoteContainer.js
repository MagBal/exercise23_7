import { connect } from 'react-redux';
import Notes from './Notes';
import { updateNoteRequest, deleteNoteRequest, editNote, moveWithinLane } from '../Note/NoteActions';

const mapDispatchToProps = {
  editNote,
  updateNote: updateNoteRequest,
  deleteNote: deleteNoteRequest,
  moveWithinLane,
};

export default connect(null, mapDispatchToProps)(Notes);