import { useState } from "react";
import data from "/data.json"

const [active, setActive] = useState([false, false, false, false, false])
const isSomeActive = active.some((element) => element);
const handleClick = () => {
    isSomeActive ? setActive([false, false, false, false, false]) : setActive([true, true, true, true, true])
}

const FAQ = (handleClick, isSomeActive, data, turn, setTurn) => {
    return (
        <div className="">
            FAQ
        </div>
    );
}

export default FAQ;