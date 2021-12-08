import React from 'react';

import { DivButton } from './styled';

interface Props {
    color: string;
    children: JSX.Element[];
}

export default function ButtonIcon(props: Props): JSX.Element {
    return (
        <DivButton
            style={{
                backgroundColor: props.color
            }}
        >
            {props.children.map((div) => div)}
        </DivButton>
    );
}
