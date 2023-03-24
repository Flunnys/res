import React from "react";
import classNames from 'classnames'
import propTypes from 'prop-types'
import styled from "styled-components";

const Wrapper = styled.div`
   margin-bottom: 1rem;
   button {
     display: inline-block;
     transition: 0.1s all ease;
     opacity: 0 !important;
   }
   &:hover button {
     opacity: 1 !important;
   }
   p {
    display: inline-block;
    margin-bottom: 0;
   }
`


const Title = ({size, 
  children, 
  className,
  isShowButton,
  onClick, 
  ...arg}) => {

    const classs = classNames(`ui-title-${size}`, className)

    return(
      <Wrapper>
      <p
        className={classs}
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        {...arg}
      >
        {children}
      </p>
      <button className="ui-button isLink" onClick={onClick} >+</button>
      </Wrapper>)
}

Title.propTypes = {
    size: propTypes.oneOf(['1','2','3']),
    isUppercase: propTypes.bool,
    isShowButton: propTypes.bool,
    className:propTypes.string,
    onClick: propTypes.func,
    children: propTypes.node
}

Title.defaultProps = {
  isUppercase: false,
  isShowButton: false,
  onClick: () => {},
  size: '1',
  className: '',
}
export default Title;