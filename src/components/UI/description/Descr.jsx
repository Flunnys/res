import React from "react";
import propTypes from 'prop-types'
import classNames from "classnames";


const Descr = ({isPrimary,isSecondary,children, className, ...arg}) => {

    const classs = classNames ('ui-text', className,{
        isPrimary,
        isSecondary,
    })

    return(
        <p
          className={classs}
          contentEditable
          suppressContentEditableWarning
          spellCheck={false}
          {...arg}
        >
          {children}
        </p>)
  }


Descr.propTypes = {
    isPrimary: propTypes.bool,
    isSecondary: propTypes.bool,
    className:propTypes.string,
    children: propTypes.node.isRequired
}

Descr.defaultProps = {
    isPrimary: false,
    isSecondary: false,
    className: '',
}
export default Descr;