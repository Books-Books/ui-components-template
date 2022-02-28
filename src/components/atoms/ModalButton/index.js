import React, { Fragment } from 'react'
import modalCss from '../../molecules/ModalTest/Modal.module.css'
import { Button, Image } from '../index'
import css from './ModalButton.module.css'

export const ModalButton = ({
  hasImage = true,
  label,
  id,
  url,
  alt,
  typeImage,
  dataStyle,
  width,
  addClass
}) => {
  const openModal = function (id) {
    const modal = document.getElementById(`modal${id}`)
    const modalOverlay = document.getElementById(`modalOverlay${id}`)

    modal.hidden = false
    modal.focus()

    modal.classList.add(modalCss['modal--active'])
    modalOverlay.classList.add(modalCss['overlay--active'])
  }

  return (
    <Fragment>
      {hasImage ? (
        <button
          className={css['modal-button-image']}
          aria-labelledby={`modalDescription${id}`}
          aria-description='Abrir modal'
          onClick={() => openModal(id)}
          id={`openModal${id}`}
        >
          <span className='sr-only' id={`modalDescription${id}`}>
            {label}
          </span>
          <Image
            url={url}
            alt={alt}
            typeImage={typeImage}
            dataStyle={dataStyle}
            width={width}
            addClass={addClass}
          />
        </button>
      ) : (
        <Button
          id={`openModal${id}`}
          aria-description='Abrir modal'
          hasAriaLabel={false}
          label={label}
          onClick={() => openModal(id)}
          addClass={addClass}
        />
      )}
    </Fragment>
  )
}
