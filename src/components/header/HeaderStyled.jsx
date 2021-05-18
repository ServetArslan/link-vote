import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled.header`
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
`


export const Logo = styled.div`
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
`

export const Logo = styled(Link)`
  font-size: 20px;
  color: red;
`
