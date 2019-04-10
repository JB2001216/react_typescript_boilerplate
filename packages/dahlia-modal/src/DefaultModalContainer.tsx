import React, { FunctionComponent, useState, useEffect, useRef, CSSProperties } from 'react'

interface Props {
  visible: boolean
  className?: string
}

const overlay: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0, 0.6)',
}

const content: CSSProperties = {
  width: '520px',
  margin: '40px auto',
  background: '#fff',
  overflow: 'auto',
  padding: '20px',
}

const DefaultModalContainer: FunctionComponent<Props> = props => {
  const { visible, className } = props
  const ref = useRef({} as HTMLDivElement)
  const [prevStatus, setStatus] = useState(false)

  const toggle = () => {
    ref.current.style.display = visible ? 'block' : 'none'
  }

  if (props.visible !== prevStatus) {
    setStatus(props.visible)
    toggle()
  }

  useEffect(() => {
    toggle()
    if (className) {
      ref.current.classList.add(className)
    }
  }, [])

  return (
    <div className="dahlia-modal" ref={ref} style={overlay}>
      <div className="dahlia-modal-content" style={content}>
        {props.children}
      </div>
    </div>
  )
}

DefaultModalContainer.defaultProps = {
  visible: false,
}

export default DefaultModalContainer
