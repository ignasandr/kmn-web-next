import { ReactNode } from "react"
import styled from "styled-components"

interface Props {
    children?: ReactNode;
}

const StyledHeaderItem = styled.span`
    margin-right: 19px;
    cursor: pointer;

    a {
        color: ${props => props.theme.colors.base};
        text-decoration: none;
        font-weight: bold;
        font-size: 14px;
    }
`

export default function HeaderItem({ children }: Props) {
    return <StyledHeaderItem>{children}</StyledHeaderItem>
}