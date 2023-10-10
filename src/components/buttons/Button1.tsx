
export default function Button1 (props: {buttonText: string, className: string}) {

    return (
        <button className={props.className}>
            {props.buttonText}
            <span className="button1Sign">&gt;</span>
        </button>
    )
}
