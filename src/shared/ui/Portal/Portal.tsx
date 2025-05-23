import { createPortal } from 'react-dom';

export interface PortalProps {
    children: React.ReactNode;
    container?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
    const { children, container = document.body } = props;
    return createPortal(children, container)
}