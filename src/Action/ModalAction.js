import { OPEN_MODAL } from "../TypeAction/ModalTypes"
export const openModal = (openClose, content) => 
{
    return {
        type: OPEN_MODAL,
        payload: {
            openClose,
            content
        }
    }
} 