import {Link} from "react-router-dom"
import {ChevronLeftIcon} from "@heroicons/react/24/solid"


interface Props {
    children: string,

    link: string
}


/**
 * Composant pour la modification d'un employé
 * @param children la valeur affichée du lien
 * @param link lien où on va se diriger
 * @returns {JSX.Element} Le rendu du composant.
 */
const LinkReturn = ({children, link}: Props) => {
    return (
        <Link
            to={link}
            className="link-blue flex items-center gap-1.5">
            <ChevronLeftIcon className="size-4"/>
            <span className="text-lg">{children}</span>
        </Link>
    )
}

export default LinkReturn
