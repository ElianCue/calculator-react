import Button from "./Button";
import "./css/buttonPanel.css";

export default function ButtonPanel ({clickHandle}){
    
    const handleClick = buttonName => {
        clickHandle(buttonName)
    } 
    return(
        <div className="button-panel">
            <div className="">
                <Button name="AC" clickHandle={handleClick} blueDark/>
                <Button name="+/-" clickHandle={handleClick} blueDark/>
                <Button name="%" clickHandle={handleClick} blueDark/>
                <Button name="/" clickHandle={handleClick} yellow/>
            </div>
            <div className="">
                <Button name="7" clickHandle={handleClick} mustard />
                <Button name="8" clickHandle={handleClick} mustard />
                <Button name="9" clickHandle={handleClick} mustard />
                <Button name="x" clickHandle={handleClick} yellow/>
            </div>
            <div className="">
                <Button name="4" clickHandle={handleClick} mustard />
                <Button name="5" clickHandle={handleClick} mustard />
                <Button name="6" clickHandle={handleClick} mustard />
                <Button name="-" clickHandle={handleClick} yellow />
            </div>
            <div className="">
                <Button name="1" clickHandle={handleClick} mustard />
                <Button name="2" clickHandle={handleClick} mustard />
                <Button name="3" clickHandle={handleClick} mustard />
                <Button name="+" clickHandle={handleClick} yellow />
            </div>
            <div className="">
                <Button name="0" clickHandle={handleClick} width mustard />
                <Button name="." clickHandle={handleClick} mustard/>
                <Button name="=" clickHandle={handleClick} yellow />
            </div>
        </div>
    )
}