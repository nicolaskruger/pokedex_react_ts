import { FC, useState } from "react"
import { Provider } from "react-redux"
import { defMessage } from "../../../domain"
import { LoaderContext, MessageContext } from "../../../hooks/context"
import { store } from "../../../store"

const CombineProviders: FC = ({ children }) => {
    return (
        <LoaderContext.Provider value={useState(Boolean(false))}>
            <MessageContext.Provider value={useState(defMessage)}>
                <Provider store={store}>
                    {children}
                </Provider>
            </MessageContext.Provider>
        </LoaderContext.Provider>
    )
}

export { CombineProviders }