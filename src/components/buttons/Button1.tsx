
import { Link } from "react-router-dom"

export default function Button1 (props: {buttonText: string, className: string, link: string}) {

    return (
        <Link to={props.link} className={`${props.className} flex`}>
            <p>{props.buttonText}</p>
            <span className="button1Sign">&gt;</span>
        </Link>
    )
}
