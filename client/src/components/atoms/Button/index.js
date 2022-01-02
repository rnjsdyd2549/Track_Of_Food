// '음식 고르러가기', 모달창의 '예', '아니오', 음식 고르는 페이지의 '결과보기' 등과 
// 상세지도 보기 모달의 'X'버튼, 담은 음식들의 음식 삭제 버튼도 해당
// 일반 자바스크립트로 변경해야됨
// https://github.com/danilowoz/react-atomic-design/blob/master/src/components/atoms/button/index.js
// @flow 
import * as React from 'react'
import classnames from 'classnames'

import styles from './style.css'

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

type Props = {
  type: string,
  theme: string,
  size: string,
  onClick: Function,
  children: React.Node,
  className: string,
  disabled: boolean,
}

const Button = (props: Props): React.Element<*> => {
  const { type, onClick, children, theme, size, className, disabled } = props
  const classProps: string = classnames(
    styles.button,
    styles[theme],
    styles[size],
    {
      [styles.disabled]: disabled,
    },
    className
  )

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: ButtonType.BUTTON,
  theme: ButtonTheme.DEFAULT,
  size: ButtonSize.MEDIUM,
  onClick: () => {},
  className: '',
  disabled: false,
}

export default Button