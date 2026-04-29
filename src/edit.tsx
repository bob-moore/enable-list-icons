import { createHigherOrderComponent } from '@wordpress/compose';
import {
	InspectorControls,
	__experimentalColorGradientSettingsDropdown as ColorGradientSettingsDropdown,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients,
} from '@wordpress/block-editor';
import { PanelBody, Spinner } from '@wordpress/components';
import { lazy, Suspense, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import type { ComponentType, FC } from 'react';

import { IconGapControl } from './components/IconGapControl';
import { IconPlacementControl } from './components/IconPlacementControl';
import { IconSizeControl } from './components/IconSizeControl';
import { IconVerticalOffsetControl } from './components/IconVerticalOffsetControl';
import type { BlockEditProps, ListAttributes, IconValue } from './types';

const IconPickerControl = lazy( () =>
	import( './components/IconPickerControl' ).then( ( m ) => ( {
		default: m.IconPickerControl,
	} ) )
);

type ListBlockEditProps = BlockEditProps< ListAttributes >;
type ListBlockEditComponent = FC< ListBlockEditProps >;
type WrappedListBlockEditComponent = ComponentType< ListBlockEditProps >;

export const Edit = createHigherOrderComponent<
	ListBlockEditComponent,
	WrappedListBlockEditComponent
>( ( BlockEdit ) => {
	return ( props: ListBlockEditProps ) => {
		const { attributes, setAttributes, name } = props;

		if ( 'core/list' !== name ) {
			return <BlockEdit { ...props } />;
		}

		useEffect( () => {
			import( './icons' ).then( ( { loadIcons } ) => loadIcons() );
		}, [] );

		const colorGradientSettings = useMultipleOriginColorsAndGradients();
		const {
			icon,
			iconSize,
			iconGap,
			iconOutside,
			iconVerticalOffset,
			iconColor,
		} = attributes;

		const handleIconChange = ( nextIcon: IconValue ) => {
			setAttributes( { icon: nextIcon } );
		};

		const handleIconSizeChange = ( value: string ) => {
			setAttributes( { iconSize: value } );
		};

		const handleIconGapChange = ( value: string ) => {
			setAttributes( { iconGap: value } );
		};

		const handleIconPlacementChange = ( isOutside: boolean ) => {
			setAttributes( { iconOutside: isOutside } );
		};

		const handleIconVerticalOffsetChange = ( value: string ) => {
			setAttributes( { iconVerticalOffset: value } );
		};

		const handleIconColorChange = ( value?: string ) => {
			setAttributes( { iconColor: value ?? '' } );
		};

		return (
			<>
				<BlockEdit { ...props } />
				<InspectorControls>
					<PanelBody
						title={ __( 'Icon', 'enable-list-icons' ) }
						initialOpen={ false }
					>
						<Suspense fallback={ <Spinner /> }>
							<IconPickerControl
								icon={ icon }
								onChange={ handleIconChange }
							/>
						</Suspense>
						<IconSizeControl
							value={ iconSize }
							onChange={ handleIconSizeChange }
						/>
						<IconGapControl
							value={ iconGap }
							onChange={ handleIconGapChange }
						/>
						<IconPlacementControl
							isOutside={ iconOutside }
							onChange={ handleIconPlacementChange }
						/>
						<IconVerticalOffsetControl
							value={ iconVerticalOffset }
							onChange={ handleIconVerticalOffsetChange }
						/>
					</PanelBody>
				</InspectorControls>
				<InspectorControls group="color">
					<ColorGradientSettingsDropdown
						settings={ [
							{
								label: __( 'Icon', 'enable-list-icons' ),
								colorValue: iconColor,
								onColorChange: handleIconColorChange,
							},
						] }
						panelId={ props.clientId }
						hasColorsOrGradients={ false }
						disableCustomColors={ false }
						__experimentalIsRenderedInSidebar
						{ ...colorGradientSettings }
					/>
				</InspectorControls>
			</>
		);
	};
}, 'Edit' );
