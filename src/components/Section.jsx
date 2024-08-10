import React from 'react'
import SectionSvg from '../assets/svg/SectionSvg'

const Section = ({
	className,
	id,
	crosses,
	crossesOffset,
	customPaddings,
	children,
}) => {
	return (
		<div
			className={`relative ${
				customPaddings ||
				`py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : ''}
				${className || ''}`
			} `}
		>
			{children}
			<div
				className='absolute hidden w-0.25 h-full left-5 top-0 bg-stroke-1 md:block lg:left-7.5 xl:left-10 pointer-events-none
			'
			/>
			<div
				className='absolute hidden w-0.25 h-full left-5 top-0 bg-stroke-1 md:block lg:right-7.5 xl:right-10 pointer-events-none
			'
			/>
			{crosses && (
				<>
					<div
						className={` absolute h-0.25 top-0 left-7.5 right-7.5 bg-stroke-1 ${
							crossesOffset && crossesOffset
						} pointer-events-none lg:block xl:left-10 right-10`}
					/>
					<SectionSvg crossesOffset={crossesOffset} />
				</>
			)}
		</div>
	)
}

export default Section
