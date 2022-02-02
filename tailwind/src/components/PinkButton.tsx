import React from 'react';

interface PinkButtonProps {
	children: React.ReactChildren,
	label: string
}

export const PinkButton = ({
	children,
	label
} : PinkButtonProps) => {
	return (
		<button aria-label={label} className="bg-pink-500 text-white border border-white">
			{children}
		</button>
	);
}