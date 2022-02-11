import React, { Fragment, useState } from 'react'
import { DarkThemeToggle } from '../../atoms/DarkThemeToggle'
import { Dropdown } from '../../atoms/Dropdown'
import { Icon } from '../../atoms/icon'
import { Link } from '../../atoms/Link'
import cssNavbar from './NavBar.module.css'

export function NavBar({
  contentOva, //Se pasa el arreglo de objetos [{}]
  hrefInicio = '#' //Se pasa la url del Btn Inicio
}) {
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const [dropdownAcc, setDropdownAcc] = useState(false)
  const [dropdownHelp, setDropdownHelp] = useState(false)
  const [activeTheme, setActiveTheme] = useState('')

  //Función para listar las rutas de la ova "props = contentOva"
  const content = [
    {
      name: 'primero',
      url: '#'
    },
    {
      name: 'segundo',
      url: '#'
    },
    {
      name: 'tercero',
      url: '#'
    },
    {
      name: 'cuarto',
      url: '#'
    },
    {
      name: 'quinto',
      url: '#'
    }
  ].map((enlaces, i) => {
    if (i < 9) {
      //If para que los primeros enlaces contengan el 01 - 09
      return (
        <li className={cssNavbar['styleLi']}>
          <a href={enlaces.url} className={cssNavbar['stylelinks']}>
            <span className={cssNavbar['styleNumber']}>{`0${i + 1}.`} </span>
            {enlaces.name}
          </a>
        </li>
      )
    } else {
      return (
        <li className={cssNavbar['styleLi']}>
          <a href={enlaces.url} className={cssNavbar['stylelinks']}>
            <span className={cssNavbar['styleNumber']}>{`${i + 1}.`} </span>
            {enlaces.name}
          </a>
        </li>
      )
    }
  })
  //funcion que cambia los estados de cada menú desplegable
  const handleClickDropdown = (state, setState) => {
    setDropdownMenu(false)
    setDropdownAcc(false)
    setDropdownHelp(false)
    setState(!state)
  }

  const changeTheme = (type) => {
    switch (type) {
      case '':
        document.body.className = ''
        break
      case 'highContrast':
        document.body.className = 'high-contrast'
        break
      case 'grayScale':
        document.body.className = 'grayscale'
        break
      case 'invertColors':
        document.body.className = 'invert-colors'
        break
      case 'yellowOverBlack':
        document.body.className = 'yellow-over-black'
        break
      case 'whiteOverRed':
        document.body.className = 'white-over-red'
        break
      case 'greenOverBlue':
        document.body.className = 'green-over-blue'
        break
      case 'yellowOverBlue':
        document.body.className = 'yellow-over-blue'
        break
      case 'blackOverWhite':
        document.body.className = 'black-over-white'
        break
      default:
        document.body.className = ''
    }
    setActiveTheme(type)
  }

  return (
    <Fragment>
      <nav className={cssNavbar['menuContainer']} aria-label='menu principal'>
        <ul role='list' className={cssNavbar['ulMenu']}>
          <li
            onClick={() => {
              handleClickDropdown(dropdownMenu, setDropdownMenu) //invocamos y utilizamos la función
            }}
          >
            <Dropdown
              label='Menu'
              svgHide='true'
              icon='menu'
              addClass={cssNavbar['styleBtn']}
              ulClass={cssNavbar['styleUlMenu']}
              isExpanded={dropdownMenu}
              fnMenuExpanded={setDropdownMenu}
            >
              {content}
            </Dropdown>
          </li>
          <li>
            <Link
              label='Inicio'
              icon='home'
              addClass={cssNavbar['styleLink']}
              href={hrefInicio}
            />
          </li>
          <li
            onClick={() => {
              handleClickDropdown(dropdownAcc, setDropdownAcc) //invocamos y utilizamos la función
            }}
          >
            <Dropdown
              label='Accesibilidad'
              svgHide='true'
              icon='accessibility_new'
              addClass={cssNavbar['styleBtn']}
              ulClass={cssNavbar['styleUlAcc']}
              isExpanded={dropdownAcc}
              fnMenuExpanded={setDropdownAcc}
            >
              <li className={cssNavbar['styleLi']}>
                <button type='button' className={cssNavbar['styleBtns']}>
                  <Icon nameIcon='hearing' />
                  <span className={`${cssNavbar.spanText}`}>Asistencia</span>
                  <Icon nameIcon='chevron_right' />
                </button>
                <ul
                  className={`${cssNavbar.segundoMenu} ${cssNavbar.positionUlRelative}`}
                >
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='disableHelp'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Deshabilitar ayuda
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='ActivateInterpreter'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Activar intérprete
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='activateAudio'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Activar audio
                      </span>
                    </button>
                  </li>
                </ul>
              </li>
              <li className={cssNavbar['styleLi']}>
                <button type='button' className={cssNavbar['styleBtns']}>
                  <Icon nameIcon='brush' />
                  <span className={`${cssNavbar.spanText}`}>Contraste</span>
                  <Icon nameIcon='chevron_right' />
                </button>
                <ul
                  className={`${cssNavbar.segundoMenu} ${cssNavbar.positionUlRelative}`}
                >
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>Sin tema</span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                      // onClick={changeTheme('highContrast')}
                      // aria-preseed={activeTheme('highContrast') ? true : false}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Alto contraste
                      </span>
                    </button>
                  </li>

                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Invertir colores
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Amarillo sobre negro
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Blanco sobre rojo
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Verde sobre azul
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Amarillo sobre azul
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='noTheme'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Blaco sobre negro
                      </span>
                    </button>
                  </li>
                </ul>
              </li>
              <li className={cssNavbar['styleLi']}>
                <button type='button' className={cssNavbar['styleBtns']}>
                  <Icon nameIcon='format_size' />
                  <span className={`${cssNavbar.spanText}`}>
                    Tamaño de letra
                  </span>
                  <Icon nameIcon='chevron_right' />
                </button>
                <ul
                  className={`${cssNavbar.segundoMenu} ${cssNavbar.positionUlRelative}`}
                >
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='fontZise1'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Tamaño de letra 1
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='fontZise2'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Tamaño de letra 2
                      </span>
                    </button>
                  </li>
                  <li className={`${cssNavbar.styleSubLi}`}>
                    <button
                      name='fontZise3'
                      type='button'
                      className={cssNavbar['styleBtns']}
                    >
                      <span className={`${cssNavbar.spanText}`}>
                        Tamaño de letra 3
                      </span>
                    </button>
                  </li>
                </ul>
              </li>
              <li className={cssNavbar['styleLi']}>
                <DarkThemeToggle addClass={cssNavbar['styleBtns']} />
              </li>
            </Dropdown>
          </li>
          <li>
            <li
              onClick={() => {
                handleClickDropdown(dropdownHelp, setDropdownHelp) //invocamos y utilizamos la función
              }}
            >
              <Dropdown
                label='Ayuda'
                svgHide='true'
                icon='help'
                addClass={cssNavbar['styleBtn']}
                ulClass={cssNavbar['styleUlAcc']}
                isExpanded={dropdownHelp}
                fnMenuExpanded={setDropdownHelp}
              >
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <Icon nameIcon='description' />
                    <span className={`${cssNavbar.spanText}`}>
                      Bibliografia
                    </span>
                  </button>
                </li>
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <Icon nameIcon='credit_card' />
                    <span className={`${cssNavbar.spanText}`}>Créditos</span>
                  </button>
                </li>
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <Icon nameIcon='keyboard' />
                    <span className={`${cssNavbar.spanText}`}>
                      Atajos de teclado
                    </span>
                  </button>
                </li>
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <Icon nameIcon='info' />
                    <span className={`${cssNavbar.spanText}`}>Tour</span>
                  </button>
                </li>
                <li className={cssNavbar['styleLi']}>
                  <button type='button' className={cssNavbar['styleBtns']}>
                    <Icon nameIcon='settings' />
                    <span className={`${cssNavbar.spanText}`}>
                      Especificaciones técnicas
                    </span>
                  </button>
                </li>
              </Dropdown>
            </li>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}
