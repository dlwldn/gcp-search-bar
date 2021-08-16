import React from 'react'
import styled from 'styled-components'

const SearchWrap = styled.div`
  display: flex;
`

const SearchInputWrap = styled.div`
  display: flex;
  align-items: center;

  & > input {
    padding: 5px;
    border: none;
    margin-right: 5px;
  }

  & > button {
    border: none;
    padding: 5px;
  }
`

const SearchSelectWrap = styled.div`
  position: absolute;
  top: inherit;
  left: 0;
  width: 100%;
  margin-top: 10px;

  & > div {
    padding: 5px;
    background-color: #eee;
    margin-bottom: 5px;

    &:hover {
      cursor: pointer;
      background-color: #777;
    }
  }
`

const SearchHistoryWrap = styled.div`
  display: flex;
`

const SearchBarInput = styled.div`
  position: relative;
`


const Search = () => {
  return (
    <SearchWrap>
        <SearchHistoryWrap>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </SearchHistoryWrap>


        <SearchBarInput>
          <SearchInputWrap>
            <input type="text" placeholder="검색어"/>
            <button>검색</button>
          </SearchInputWrap>
          <SearchSelectWrap>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
          </SearchSelectWrap>
        </SearchBarInput>
       
    </SearchWrap>
  )
}

export default Search
