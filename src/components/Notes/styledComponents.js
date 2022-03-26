// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`
export const MainContainer = styled.div`
  width: 80%;
  height: 90%;
`
export const Heading = styled.h1`
  text-align: center;
  color: #4c63b6;
  font-family: 'Bree Serif';
`

export const InputContainer = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
`
export const InputField = styled.input`
  margin-bottom: 20px;
  outline: none;
  border: 0;
`
export const InputFieldText = styled.textarea`
  margin-bottom: 20px;
  outline: none;
  border: 0;
`
export const AddButton = styled.button`
  align-self: flex-end;
  background-color: #4c63b6;
  border: 0;
  border-radius: 6px;
  color: white;
  padding: 10px;
`
export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`
export const Img = styled.img`
  height: 200px;
`
export const EmptyHead = styled.h2`
  color: #334155;
  margin-bottom: 2px;
`
export const EmptyPara = styled.p`
  color: #475569;
`
export const NotesContainer = styled.ul`
  margin: 20px 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  //   justify-content: space-around;
`
