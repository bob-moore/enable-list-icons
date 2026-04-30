import {
	__experimentalParseQuantityAndUnitFromRawValue as parseQuantityAndUnitFromRawValue,
	__experimentalUnitControl as UnitControl,
	PanelRow,
	RangeControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { FC } from 'react';

const ICON_GAP_UNITS = [
	{ value: 'px', label: 'px' },
	{ value: 'em', label: 'em' },
	{ value: 'rem', label: 'rem' },
	{ value: 'vw', label: 'vw' },
	{ value: 'vh', label: 'vh' },
];

type IconGapUnit = 'px' | 'em' | 'rem' | 'vw' | 'vh';

const ICON_GAP_RANGE_SETTINGS: Record<
	IconGapUnit,
	{ min: number; max: number; step: number; default: number }
> = {
	px: { min: 0, max: 64, step: 1, default: 8 },
	em: { min: 0, max: 4, step: 0.05, default: 0.6 },
	rem: { min: 0, max: 4, step: 0.05, default: 0.6 },
	vw: { min: 0, max: 10, step: 0.1, default: 1 },
	vh: { min: 0, max: 10, step: 0.1, default: 1 },
};

type IconGapControlProps = {
	value: string;
	onChange: ( value: string ) => void;
};

export const IconGapControl: FC< IconGapControlProps > = ( {
	value,
	onChange,
} ) => {
	const [ parsedValue, parsedUnit ] = parseQuantityAndUnitFromRawValue(
		value || '0.6em',
		ICON_GAP_UNITS
	);
	const iconGapUnit = ( parsedUnit as IconGapUnit | undefined ) ?? 'em';
	const iconGapRange = ICON_GAP_RANGE_SETTINGS[ iconGapUnit ];
	const sliderValue =
		typeof parsedValue === 'number' ? parsedValue : iconGapRange.default;

	const handleUnitControlChange = ( nextValue?: string ) => {
		onChange( nextValue ?? '' );
	};

	const handleSliderChange = ( nextValue?: number ) => {
		const quantity =
			typeof nextValue === 'number' ? nextValue : iconGapRange.default;
		onChange( `${ quantity }${ iconGapUnit }` );
	};

	return (
		<PanelRow className="enable-list-icons-control-wrapper unit-range-wrapper">
			<span className="components-base-control__label">
				{ __( 'Icon gap', 'enable-list-icons' ) }
			</span>
			<div className="unit-range-wrapper__controls">
				<UnitControl
					label={ __( 'Icon gap', 'enable-list-icons' ) }
					value={ value }
					onChange={ handleUnitControlChange }
					units={ ICON_GAP_UNITS }
					__next40pxDefaultSize
					hideLabelFromVision
				/>
				<RangeControl
					label={ __( 'Icon gap', 'enable-list-icons' ) }
					value={ sliderValue }
					onChange={ handleSliderChange }
					min={ iconGapRange.min }
					max={ iconGapRange.max }
					step={ iconGapRange.step }
					withInputField={ false }
					hideLabelFromVision
					__next40pxDefaultSize
				/>
			</div>
		</PanelRow>
	);
};
