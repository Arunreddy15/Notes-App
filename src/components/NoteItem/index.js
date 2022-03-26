// Write your code here
import {ItemContainer, ItemNote, ItemTitle} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, note} = noteDetails
  return (
    <ItemContainer>
      <ItemTitle>{title}</ItemTitle>
      <ItemNote>{note}</ItemNote>
    </ItemContainer>
  )
}
export default NoteItem
