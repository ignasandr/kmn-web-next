import React, { ReactNode } from "react"

type Props = {
    children?: ReactNode,
    title?: string
}

const Layout = ({ children, title = "Kauno Menininkų Namai"}: Props ) => {
    return (
        <div></div>
    )
}

export default Layout