import styles from "./Modal.module.scss"
import { classNames } from "~shared/lib/classNames/classNames"
import { useCallback, useEffect, useRef, useState } from "react"
import { Portal } from "~shared/ui/Portal/Portal"
import { useTheme } from "~app/providers/ThemeProvider/lib/useTheme"

interface ModalProps {
  className?: string
  children: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const TIME_DELAY = 300

export const Modal = (props: ModalProps) => {
  const { isOpen = false, onClose, className, children, lazy } = props
  const [mounted, setMounted] = useState(false)
  const timeRef = useRef<ReturnType<typeof setTimeout>>(null)
  const [closing, setClosing] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
    }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if (onClose) {
      setClosing(true)
      timeRef.current = setTimeout(() => {
        onClose()
        setClosing(false)
      }, TIME_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler()
      }
    },
    [closeHandler]
  )

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown)
    }

    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current)
      }
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen, onKeyDown])

  const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  if (!mounted && !lazy) return null

  return (
    <Portal>
      <div
        className={classNames(
          styles.Modal,
          { [styles.opened]: isOpen, [styles.closing]: closing },
          [className, theme]
        )}
      >
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
