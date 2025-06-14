import {FC, ReactNode, useEffect} from "react";
import {useStore} from "react-redux";
import {ReduxStoreWithManager, StateSchemaKey} from "~app/providers/StoreProvider";
import {Reducer} from "@reduxjs/toolkit";
import {useAppDispatch} from "~shared/lib/hooks/useAppDispatch/useAppDispatch";

export type ReducerList ={
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
    children?: ReactNode
    reducers: ReducerList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props ) => {
    const { children , reducers, removeAfterUnmount} = props
    const store = useStore() as ReduxStoreWithManager
    const dispatch = useAppDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer)
            dispatch({type: `@INIT ${name} reducer`})
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, _]) => {

            store.reducerManager.remove(name as StateSchemaKey)
            dispatch({type: `@DESTROY ${name} reducer`})
                })
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <>
        {children}
      </>
    )
}
