import style from './Task1.module.scss'
import { useTas1Model } from './Task1.model';

const Task1: React.FC<unknown> = function () {

    const { isTouched, onChangeText, onClick, onCloseDialog, onTextFocus, showDialog, text, isValidState, shake } = useTas1Model();

    return <div className={style.container}>
        <form>
            <input className={`${style.text} ${(isValidState || !isTouched) ? '' : style.invalid} ${shake ? style.shake : ''}`}
                onFocus={onTextFocus}
                onChange={onChangeText}
                type="text"></input>
            <button type='submit' onClick={onClick} className={style.button}>Submit</button>
        </form>
        <div className={`${style.dialog} ${showDialog ? style.show : ''}`}>
            <div className={style.dialogContent}>
                <div>{text}</div>
                <button onClick={onCloseDialog}>Close</button>
            </div>
        </div>
    </div>
}

export default Task1;