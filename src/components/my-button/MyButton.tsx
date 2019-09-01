import React from "react";
import { Button } from 'reactstrap';

export interface IMyButtonProps {
    typeName:string
}

export const MyButton: React.FC<IMyButtonProps>  = (props) =>{
    return (
        <Button color={props.typeName}>Danger!</Button>
    );
};
