import "./css/button.css"
export default function Button ({clickHandle, name , blueDark, yellow, width, gray, mustard}){
    const className = [
        "component-button",
        width ? "width" : "",
        blueDark ? "blueDark" : "",
        yellow ? "yellow" : "",
        gray ? "gray" : "",
        mustard ? "mustard" : "",

    ]
    const handleClick = () => clickHandle(name);
    return(
        <div className={className.join(" ").trim()}>
            <button className="" onClick={handleClick}>{name}</button>
        </div>
    )
}