import { FC, useContext } from "react"
import { LoaderContext } from "../../../../hooks/context"
import "./simple-loader.component.css"

const SimpleLoader: FC = ({ children }) => {

    const [load] = useContext(LoaderContext);

    return (
        <>
            {
                load ? (
                    <div className="simple-loader" >

                    </div >

                ) : <> {
                    children
                }</>}
        </>
    )
}

export { SimpleLoader }