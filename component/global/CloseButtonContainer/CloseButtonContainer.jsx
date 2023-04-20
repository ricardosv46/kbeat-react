import { useClose } from "component/global/CloseButtonContainer/CloseButtonContainer.hook";
import { IconXmark } from "component/global/Icon/IconXmark";
import style from "component/global/CloseButtonContainer/CloseButtonContainer.module.scss";

const CloseButtonContainer = ({ children, variant = "top-right-center",onClose }) => {
    const { handleClose, isOpen } = useClose();
    return (
        isOpen && (
            <section className={`${style["close-button__container"]} w-1000`}>
                <button
                    type="button"
                    role="button"
                    onClick={onClose ? onClose : handleClose}
                    className={`${style["close-button__icon"]} ${style[variant]}`}
                    arial-label="cerrar"
                >
                    <IconXmark height="10" width="10" />
                </button>
                {children}
            </section>
        )
    );
};

export { CloseButtonContainer };
