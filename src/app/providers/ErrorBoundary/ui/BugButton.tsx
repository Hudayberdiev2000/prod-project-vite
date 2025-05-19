import {classNames} from "~shared/lib/classNames/classNames";
import {Button} from "~shared/ui/Button/Button";
import {useEffect, useState} from "react";

interface BugButtonProps {
    className?: string
}

export const BugButton = ({ className }:BugButtonProps ) => {
    const [error, setError] = useState(false)

    const toggleError = () => setError(true)

    useEffect(() => {
        if(error) {
            throw Error('This is test error')
        }
    }, [error])

    return (
      <Button onClick={toggleError} className={classNames("", {}, [className])}>
        Throw Error
      </Button>
    )
}
