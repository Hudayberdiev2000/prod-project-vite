import styles from "./Modal.module.scss"
import {classNames} from "~shared/lib/classNames/classNames";
import {useCallback, useEffect, useRef, useState} from "react";
import {Portal} from "~shared/ui/Portal/Portal";

interface ModalProps {
    className?: string,
    children: React.ReactNode
    isOpen?: boolean
    onClose?: () => void
}

const TIME_DELAY = 300

export const Modal = (props: ModalProps ) => {
    const {isOpen = false, onClose, className, children } = props
    const timeRef = useRef<ReturnType<typeof setTimeout>>(null)
    const [closing, setClosing] = useState(false)

    const closeHandler = useCallback(() => {
        if(onClose) {
            setClosing(true)
            timeRef.current = setTimeout(() => {
                onClose()
                setClosing(false)
            }, TIME_DELAY)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            closeHandler()
        }
    }, [closeHandler])

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            if(timeRef.current) {
                clearTimeout(timeRef.current)
            }
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])



    const onContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    return (
      <Portal>
        <div className={classNames(styles.Modal, {[styles.opened]: isOpen,
          [styles.closing]: closing}, [className])}>
          <div className={styles.overlay} onClick={closeHandler}>
            <div className={styles.content} onClick={onContentClick}>
              {children}
            </div>
          </div>
        </div>
      </Portal>
    )
}
