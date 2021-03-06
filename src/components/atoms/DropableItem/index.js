import PropTypes from 'prop-types'
import React, { Fragment, useState } from 'react'
import { Icon } from '../icon/index'
import css from './DropableItem.module.css'

export function AccordionItem({ item, index, stateIcon, addClass, ...props }) {
  const [Expanded, SetExpanded] = useState(false)
  const [active, setActive] = useState('')

  const toggleAccordion = () => {
    Expanded ? SetExpanded(false) : SetExpanded(true)
    if (active === '') {
      setActive(css['active'])
    } else {
      setActive('')
    }
  }

  const hideAccordion = () => {
    SetExpanded(false)
    setActive('')
  }

  return (
    <Fragment>
      <button
        className={`${css['c-collapsible-container-header']} ${addClass}`}
        aria-expanded={Expanded}
        onClick={toggleAccordion}
        {...props}
      >
        <Icon nameIcon={item.dataIcon} />
        <p> {item.title}</p>
        <Icon nameIcon={stateIcon} />
      </button>
      <div
        className={`${css['c-collapsible-container-body']} ${active}`}
        id={`body${index}`}
      >
        <p>{item.text}</p>
      </div>
    </Fragment>
  )
}

AccordionItem.propTypes = {
  item: PropTypes.object,
  stateIcon: PropTypes.string,
  index: PropTypes.number,
  addClass: PropTypes.string
}

AccordionItem.defaultProps = {
  stateIcon: 'expand_more',
  addClass: ''
}
