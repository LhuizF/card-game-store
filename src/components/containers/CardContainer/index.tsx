import React from 'react';
import { Container } from './styled';

interface Props {
    children: JSX.Element;
}

export default function CardContainer({ children }: Props): JSX.Element {
    return <Container>{children}</Container>;
}
