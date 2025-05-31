import {Provider} from "react-redux";
import {createReduxStore} from "~app/providers/StoreProvider/config/store";
import {StateSchema} from "~app/providers/StoreProvider/config/StateSchema";
import {DeepPartial} from "vite-plugin-checker/dist/types";
import {useNavigate} from "react-router-dom";

interface StoreProviderProps {
    children?: React.ReactNode,
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider = (props:StoreProviderProps ) => {
    const { children, initialState } = props;

    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        navigate
    );

    return (
      <Provider store={store}>
        {children}
      </Provider>
    )
}
