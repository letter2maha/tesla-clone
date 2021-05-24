import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

function Header() {
  const [menuStatus, setMenuState] = useState(false)

  return (
    <Container>
      <a href='#'>
        <img src='images/logo.svg' alt='' />
      </a>
      <Menu>
        <a href='#'> Model S</a>

        <a href='#'> Model 3</a>

        <a href='#'> Model X</a>

        <a href='#'> Model Y</a>
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu
          onClick={() => {
            setMenuState(true)
          }}
        />
      </RightMenu>
      <BurgerNav show={menuStatus}>
        <CloseWrap>
          <CustClose
            onClick={() => {
              setMenuState(false)
            }}
          />
        </CloseWrap>
        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Used Inventory</a>
        </li>
        <li>
          <a href='#'>Trade-in</a>
        </li>
        <li>
          <a href='#'>Fleet and Business</a>
        </li>
        <li>
          <a href='#'>Cybertruck</a>
        </li>
        <li>
          <a href='#'>roadster</a>
        </li>
        <li>
          <a href='#'>semi</a>
        </li>
        <li>
          <a href='#'>Available Inventory</a>
        </li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-wight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-wight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`
const CustomMenu = styled(MenuIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-wight: 600;
    }
  }
`
const CustClose = styled(CloseIcon)``
const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`
