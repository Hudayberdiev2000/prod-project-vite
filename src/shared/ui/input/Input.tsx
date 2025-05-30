import { classNames } from "~shared/lib/classNames/classNames"
import styles from "./Input.module.scss"
import {memo, useEffect, useRef, useState} from "react";

type HTMLInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">

interface InputProps extends HTMLInputProps{
    className?: string
    value?: string
    onChange?: (val: string) => void
    placeholder?: string
    autoFocus?: boolean
}

export const Input = memo((props:InputProps ) => {
    const {className, autoFocus =false, onChange, value, type = "text", placeholder, ...otherProps} = props
    const [focused, setFocused] = useState(false)
    const [caretPosition, setCaretPosition] = useState(0)
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(autoFocus) {
            setFocused(true)
            ref.current?.focus()
        }
    }, [autoFocus])

    const onBlur = () => setFocused(false)

    const onFocus = () => setFocused(true)

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.target.selectionStart ?? 0)
    }

    const onSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        setCaretPosition(target.selectionStart ?? 0);
    };

    return (
      <div   className={classNames(styles.InputWrapper, {}, [className])}>
        {placeholder && <div className={styles.placeholder}>{placeholder + '>'}</div>}
        <div className={styles.caretWrapper}>
          <input
              ref={ref}
              onFocus={onFocus}
              onBlur={onBlur}
            onChange={onInputChange}
            type={type}
              onSelect={onSelect}
            value={value}
            {...otherProps}
            className={styles.input}
        />
          {focused && <span className={styles.caret}
                            style={{left: `${caretPosition * 7.9}px`}}>

          </span>}
        </div>
      </div>
    )
})
