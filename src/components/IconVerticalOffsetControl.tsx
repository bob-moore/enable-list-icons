import {
	__experimentalParseQuantityAndUnitFromRawValue as parseQuantityAndUnitFromRawValue,
	__experimentalUnitControl as UnitControl,
	PanelRow,
	RangeControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { FC } from 'react';

const ICON_OFFSET_UNITS = [
	{ value: 'px', label: 'px' },
	{ value: 'em', label: 'em' },
	{ value: 'rem', label: 'rem' },
	{ value: 'vw', label: 'vw' },
	{ value: 'vh', label: 'vh' },
];

type IconOffsetUnit = 'px' | 'em' | 'rem' | 'vw' | 'vh';

const ICON_OFFSET_RANGE_SETTINGS: Record<
	IconOffsetUnit,
	{ min: number; max: number; step: number; default: number }
> = {
	px: { min: -32, max: 32, step: 1, default: 0 },
	em: { min: -2, max: 2, step: 0.05, default: 0 },
	rem: { min: -2, max: 2, step: 0.05, default: 0 },
	vw: { min: -5, max: 5, step: 0.1, default: 0 },
	vh: { min: -5, max: 5, step: 0.1, default: 0 },
};

type IconVerticalOffsetControlProps = {
	value: string;
	onChange: ( value: string ) => void;
};

export const IconVerticalOffsetControl: FC<
	IconVerticalOffsetControlProps
> = ( { value, onChange } ) => {
	const [ parsedValue, parsedUnit ] = parseQuantityAndUnitFromRawValue(
		value || '0px',
		ICON_OFFSET_UNITS
	);
	const iconOffsetUnit = ( parsedUnit as IconOffsetUnit | undefined ) ?? 'px';
	const iconOffsetRange = ICON_OFFSET_RANGE_SETTINGS[ iconOffsetUnit ];
	const sliderValue =
		typeof parsedValue === 'number' ? parsedValue : iconOffsetRange.default;

	const handleUnitControlChange = ( nextValue?: string ) => {
		onChange( nextValue ?? '' );
	};

	const handleSliderChange = ( nextValue?: number ) => {
		const quantity =
			typeof nextValue === 'number' ? nextValue : iconOffsetRange.default;
		onChange( `${ quantity }${ iconOffsetUnit }` );
	};

	return (
		<PanelRow className="enable-list-icons-control-wrapper unit-range-wrapper">
			<UnitControl
				label={ __( 'Vertical offset', 'enable-list-icons' ) }
				value={ value }
				onChange={ handleUnitControlChange }
				units={ ICON_OFFSET_UNITS }
				__next40pxDefaultSize
			/>
			<RangeControl
				label={ __( 'Vertical offset', 'enable-list-icons' ) }
				value={ sliderValue }
				onChange={ handleSliderChange }
				min={ iconOffsetRange.min }
				max={ iconOffsetRange.max }
				step={ iconOffsetRange.step }
				withInputField={ false }
				hideLabelFromVision
			/>
		</PanelRow>
	);
};
