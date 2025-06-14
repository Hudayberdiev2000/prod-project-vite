import {classNames} from "~shared/lib/classNames/classNames";
import styles from "./Text.module.scss"
import {memo} from "react";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",

}

interface TextProps {
    className?: string
    title?: string
    text?:string
    theme?: TextTheme
}

export const Text = memo((props:TextProps ) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props
    return (
      <div className={classNames(styles.Text, {}, [className, styles[theme]])}>
        {title && <p className={styles.title}>{title}</p>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
    )
})
