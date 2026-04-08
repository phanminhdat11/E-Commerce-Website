import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


type Props = {
    nameButton: string,
    icon: IconProp
}
export default function ButtonComponent({nameButton, icon}: Props) {
    
    return (
        <div className="flex space-x-4 rounded-full px-3 py-2 bg-orange-500">
            <FontAwesomeIcon icon={icon} className="size-3"/>
            <p className="text-white text-lg">{nameButton}</p>
        </div>
    )
};
