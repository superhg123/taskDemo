import {useState} from "react";
import checkBox from './check.svg'
import uncheckBox from './notcheck.svg'
import deleteImg from './backspace.svg'
import PropTypes from 'prop-types'
function Task(props) {
    const [checked, setChecked] = useState(props.checked);
    const changeCheck = () => {
        setChecked(!checked);
    }

    return (
    <>
            <div className={"w-[100%] h-full bg-blue-950 flex items-center justify-between my-5 rounded-xl relative"}>
            <>
                {
                    checked && (
                        <img src={checkBox} className={"h-[3rem] ml-[0.5rem] my-2"} alt="logo"
                        onClick={changeCheck}/>
                    )
                }
                {
                    !checked && (
                        <img src={uncheckBox} className={"h-[3rem] ml-[0.5rem] my-2"} alt="logo"
                        onClick={changeCheck}/>
                    )
                }
                <h1 className={'h-full py-5 align-middle font-sans text-m font-bold text-white whitespace-pre-line max-w-[65%] relative break-all'}> {props.text} </h1>
                <img src={deleteImg} className={'h-[3rem]  mr-[0.5rem]'} onClick={() => {
                    props.deleteHandler({
                        id: props.id,
                        name: props.text,
                        checked: checked
                    });
                }}/>
            </>
        </div>
    </>)
}

Task.propTypes = {
    id: PropTypes.number.isRequired,
    checked: PropTypes.bool,
    text: PropTypes.string.isRequired,
    deleteHandler: PropTypes.func
}
export default Task;