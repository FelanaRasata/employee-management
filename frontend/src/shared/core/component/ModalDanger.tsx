import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from '@headlessui/react'
import {ExclamationTriangleIcon} from '@heroicons/react/24/outline'


interface Props {

    isVisible: boolean,

    onClose: () => void,

    onConfirm: () => void,

    title: string,

    children: string
}

/**
 * Composant pour la modification d'un employé
 * @param isVisible valeur pour savoir si on affiche ou non le modal
 * @param onConfirm fonction à appeler si on confirme l'action demandée
 * @param onClose fonction à appeler si on annule / ferme l'action demandée
 * @param title titre du modal
 * @param children texte du modal
 *
 * @returns {JSX.Element} Le rendu du composant.
 */
const ModalDanger = ({isVisible, onConfirm, onClose, title, children}: Props) => {

    return (
        <Dialog open={isVisible} onClose={onClose} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div
                                    className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600"/>
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                        {title}
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            {children}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-1">
                            <button
                                type="button"
                                onClick={() => onConfirm()}

                                className="danger-button"
                            >
                                Confirm
                            </button>
                            <button
                                type="button"
                                data-autofocus
                                onClick={onClose}

                                className="cancel-button"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default ModalDanger
