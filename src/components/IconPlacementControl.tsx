import {
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	PanelRow,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import type { FC } from 'react';

type IconPlacementControlProps = {
	isOutside: boolean;
	onChange: ( isOutside: boolean ) => void;
};

export const IconPlacementControl: FC< IconPlacementControlProps > = ( {
	isOutside,
	onChange,
} ) => {
	const handleChange = ( value?: string | number ) => {
		if ( undefined === value ) {
			return;
		}

		onChange( 'outside' === String( value ) );
	};

	return (
		<PanelRow className="enable-list-icons-control-wrapper">
			<ToggleGroupControl
				label={ __( 'Icon placement', 'enable-list-icons' ) }
				value={ isOutside ? 'outside' : 'inside' }
				onChange={ handleChange }
				isBlock
				className="enable-list-icons-toggle-group-control"
			>
				<ToggleGroupControlOption
					value="inside"
					label={ __( 'Inside', 'enable-list-icons' ) }
					className={ ! isOutside ? 'is-selected' : '' }
				/>
				<ToggleGroupControlOption
					value="outside"
					label={ __( 'Outside', 'enable-list-icons' ) }
					className={ isOutside ? 'is-selected' : '' }
				/>
			</ToggleGroupControl>
		</PanelRow>
	);
};
