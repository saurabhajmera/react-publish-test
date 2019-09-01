import React from "react";
import { Button } from 'reactstrap';

/**
 * Props type for My Button Component
 */
export interface IMyButtonProps {
    /**
     * indicates the type of the component
     */
    typeName:string
}

/**
 * A Test Button Component
 * @param props
 * @constructor
 */
export const MyButton: React.FC<IMyButtonProps>  = (props) =>{
    return (
        <Button color={props.typeName}>Danger!</Button>
    );
};
