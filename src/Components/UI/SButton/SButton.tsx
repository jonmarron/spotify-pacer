import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import styles from './SButton.module.scss'
import cx from 'classnames';

interface SButtonProps {
  label?: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  iconPos?: 'left' | 'right';
  iconDef?: IconProp
}

const SButton = ({label, variant, size = 'md', iconPos, iconDef}:SButtonProps) => {
  const buttonClasses = cx( styles['button'], styles[`button--${variant}`], styles[`button--${size}`], {[styles['icon-btn']]: !label})
  return (
    <button className={buttonClasses}>
      {iconDef && iconPos === 'left' && <FontAwesomeIcon icon={iconDef} color={'#000000'}/>}
      {label}
      {iconDef && iconPos === 'right' && <FontAwesomeIcon icon={iconDef}/>}
    </button>
  )
}

export default SButton