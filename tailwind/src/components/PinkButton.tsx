import React from 'react';
import { isWhiteSpaceLike } from 'typescript';

interface PinkButtonProps {
	label: string,
	size: 'big' | 'little'
}

export const PinkButton = ({
	label,
	size
} : PinkButtonProps) => {
	return (
		<button aria-label={label} style={
			{
				backgroundColor: 'hotpink',
				color: 'white',
				border: '1px solid white',
				width: size === 'big' ? '100vw' : '50px',
				padding: size === 'big' ? '10vw' : '2px',
				fontSize: size === 'big' ? '72px' : '12px'
			}
		}>
			{label}
		</button>
	);
}