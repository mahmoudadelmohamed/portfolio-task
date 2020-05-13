import React from 'react';
import { Button as Btn } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Button.scss'
const Button = ({ them, size, className, content, icon, iconMarginLeft, iconMarginRight, order  }) => {
  return (

    <Btn
      variant={them}
      size={size}
      className={className}
    >
    {icon && (
       <FontAwesomeIcon
         className={`fontAwesome m${iconMarginLeft}-2 m${iconMarginRight}-2 order-${order}`}
         icon={icon}
         size="1x"
         />
       )}
       { content }
    </Btn>

  );
}
export default Button;
