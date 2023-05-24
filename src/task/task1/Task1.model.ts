import { useState, useCallback, FormEvent, useEffect, ChangeEvent } from "react";

export const useTas1Model = function() {
    const [isValidState, setValidState] = useState<boolean>(false);
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [shake, setShake] = useState<boolean>(false);
    const [isTouched, setTouched] = useState<boolean>(false);
    const [text, setText] = useState<string>('');

    const onClick = useCallback((e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setTouched(true);
        if (isValidState) {
            setShowDialog(true);
        } else {
            setShake(true);
        }
    }, [isValidState, setShowDialog, setShake, setTouched]);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
    
        if (shake) {
            timeout = setTimeout(() => {
                setShake(false);
            }, 3000);
        }

        return () => {
            timeout && clearTimeout(timeout);
        }
    }, [shake]);

    const onChangeText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValidState(/^[+-]?\d+$/.test(e.target.value));
        setText(e.target.value);
    }, [setValidState, setText]);

    const onCloseDialog = useCallback((e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowDialog(false);
    }, [setShowDialog])

    const onTextFocus = useCallback(() => {
        setTouched(true);
    }, [setTouched]);
    return {showDialog, isTouched, text, onClick, onChangeText, onCloseDialog, onTextFocus, isValidState, shake};
}