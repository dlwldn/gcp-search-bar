import type { NextPage } from 'next'
import Search from '../components/Search'
import styled from 'styled-components'

const FormWrap = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const Home: NextPage = () => {
  return (
    <FormWrap>
      <Search />
    </FormWrap>
  )
}

export default Home
