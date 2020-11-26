import _uniqueId from 'lodash/uniqueId'
import PropTypes from 'prop-types'
import React, { Fragment, useState } from 'react'
import base from '../../utilities/style/Base.module.css'
import { Icon } from '../icon'
import css from './InputAction.module.css'

export const InputAction = ({ type, styled, label, icon, ...args }) => {
  const [Value, SetValue] = useState('')
  const id = _uniqueId('ui-')

  function handleChage({ target }) {
    switch (type) {
      case 'file':
        SetValue(target.files[0].name)

        break
      case 'color':
        SetValue(target.value)

        break

      default:
        break
    }
  }

  return (
    <Fragment>
      <label
        className={`${base.ColorBase} ${css.LabelStyled}`}
        htmlFor={id}
        styled={styled}
        {...args}
      >
        <input
          className={css.InputAction}
          type={type}
          id={id}
          onInput={handleChage}
        />
        <Icon nameIcon={icon} />
        {label !== '' ? <span>{label}</span> : <Fragment />}
      </label>
      {Value !== '' && (
        <p
          className={css.TextFileName}
          style={type === 'color' ? { backgroundColor: Value } : {}}
        >
          {Value}
        </p>
      )}
    </Fragment>
  )
}
InputAction.propTypes = {
  styled: PropTypes.oneOf([
    'primary',
    'secondary',
    'primary-outline',
    'secondary-outline',
    'primary-icon',
    'secondary-icon',
    'primary-icon-outline',
    'secondary-icon-outline'
  ]),
  type: PropTypes.oneOf(['file', 'color']),
  icon: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
}

InputAction.defaultProps = {
  styled: 'primary',
  type: 'file',
  onClick: undefined
}
