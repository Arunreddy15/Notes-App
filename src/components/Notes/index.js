// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  AppContainer,
  MainContainer,
  Heading,
  InputContainer,
  InputField,
  InputFieldText,
  AddButton,
  EmptyContainer,
  Img,
  EmptyHead,
  EmptyPara,
  NotesContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [topicList, setTopic] = useState([])
  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNote = event => setNote(event.target.value)
  const onSubmitTopic = event => {
    event.preventDefault()
    const notes = {
      id: uuidv4(),
      title,
      note,
    }
    setNote('')
    setTitle('')
    setTopic(prevState => [...prevState, notes])
  }
  return (
    <AppContainer>
      <MainContainer>
        <Heading>Notes</Heading>
        <InputContainer onSubmit={onSubmitTopic}>
          <InputField
            value={title}
            onChange={onChangeTitle}
            placeholder="Title"
            required
          />
          <InputFieldText
            value={note}
            onChange={onChangeNote}
            placeholder="Take a Note..."
            rows="4"
            required
          />
          <AddButton type="submit">Add</AddButton>
        </InputContainer>
        {topicList.length < 1 ? (
          <EmptyContainer>
            <Img
              src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
              alt="notes empty"
            />
            <EmptyHead>No Notes Yet</EmptyHead>
            <EmptyPara>Notes you add will appear here</EmptyPara>
          </EmptyContainer>
        ) : (
          <NotesContainer>
            {topicList.map(each => (
              <NoteItem noteDetails={each} key={each.id} />
            ))}
          </NotesContainer>
        )}
      </MainContainer>
    </AppContainer>
  )
}
export default Notes
