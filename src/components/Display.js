import "./css/display.css"
export default function Display ({value}){
    return(
        <div className="component-display">
            <div className="">
                <p className="">{value}</p>
            </div>
        </div>
    )
}