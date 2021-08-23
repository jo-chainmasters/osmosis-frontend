import styled from '@emotion/styled';
import React from 'react';

export function Clip() {
	return (
		<ClipContainer>
			<ClipMiddle />
			<ClipBottom />
		</ClipContainer>
	);
}

const ClipContainer = styled.div`
	height: 60px;
	width: 160px;
	left: 50%;
	top: -8px;
	background: linear-gradient(180deg, #3a3369 0%, #231d4b 100%);
	transform: translate(-50%, 0);
	box-shadow: 0 2px 2px rgba(11, 16, 38, 0.48);
	position: absolute;
	border-radius: 0.375rem;
	overflow: hidden;
	z-index: 2;
`;

const ClipMiddle = styled.div`
	height: 30px;
	width: 48px;
	left: 50%;
	bottom: 7px;
	transform: translate(-50%, 0);
	background: rgba(91, 83, 147, 0.12);
	background-blend-mode: difference;
	position: absolute;
	border-radius: 0.375rem;
	z-index: 10;
	box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.25);
`;

const ClipBottom = styled.div`
	position: absolute;
	width: 100%;
	height: 20px;
	left: 50%;
	bottom: 0;
	transform: translate(-50%, 0);
	background: linear-gradient(180deg, #332c61 0%, #312a5d 10.94%, #2d2755 100%);
	z-index: 0;
	border-bottom-right-radius: 0.375rem;
	border-bottom-left-radius: 0.375rem;
`;
