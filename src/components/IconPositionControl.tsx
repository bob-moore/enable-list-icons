import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	PanelRow,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { FC } from 'react';

type IconPositionControlProps = {
	isLeft: boolean;
	onChange: ( isLeft: boolean ) => void;
};

export const IconPositionControl: FC< IconPositionControlProps > = ( {
	isLeft,
	onChange,
} ) => {
	const handleChange = ( value?: string | number ) => {
		if ( undefined === value ) {
			return;
		}

		onChange( 'left' === String( value ) );
	};

	return (
		<PanelRow className="enable-list-icons-control-wrapper">
			<ToggleGroupControl
				label={ __( 'Icon position', 'enable-list-icons' ) }
				value={ isLeft ? 'left' : 'right' }
				onChange={ handleChange }
				isBlock
				className="enable-list-icons-toggle-group-control"
			>
				<ToggleGroupControlOption
					value="left"
					label={ __( 'Left', 'enable-list-icons' ) }
					className={ isLeft ? 'is-selected' : '' }
				/>
				<ToggleGroupControlOption
					value="right"
					label={ __( 'Right', 'enable-list-icons' ) }
					className={ ! isLeft ? 'is-selected' : '' }
				/>
			</ToggleGroupControl>
		</PanelRow>
	);
};
