import { NoteData } from "./App"
import NoteForm from "./NoteForm"

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
}


export const NewNote = ({onSubmit}: NewNoteProps) => {
  return (
    <>
        <h1 className="mb-4">New note</h1>
        <NoteForm onSubmit={onSubmit}/>
    </>
  )
}
