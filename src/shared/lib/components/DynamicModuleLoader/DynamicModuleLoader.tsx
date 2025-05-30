import {FC, ReactNode} from "react";

interface DynamicModuleLoaderProps {
    children?: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props ) => {
    const { children } = props
    return (
      <>
        {children}
      </>
    )
}
