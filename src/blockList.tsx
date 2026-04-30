import { createHigherOrderComponent } from '@wordpress/compose';

import type { BlockListProps, WrapperProps } from './types';

export const BlockList = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props: BlockListProps ) => {
		const { name, attributes } = props;

		if ( 'core/list' !== name || ! attributes?.icon?.name ) {
			return <BlockListBlock { ...props } />;
		}

		const {
			icon,
			iconSize,
			iconGap,
			iconOutside,
			iconVerticalOffset,
			iconColor,
		} = attributes;

		if ( ! icon?.src?.length ) {
			return <BlockListBlock { ...props } />;
		}

		const className = [
			props?.className,
			`has-icon__${ icon.name }`,
			iconOutside
				? 'has-icon-placement__outside'
				: 'has-icon-placement__inside',
		]
			.filter( Boolean )
			.join( ' ' );

		const wrapperProps: WrapperProps = {
			...props?.wrapperProps,
			...( ( icon.src ||
				iconSize ||
				iconGap ||
				iconVerticalOffset ||
				iconColor ) && {
				style: {
					...props?.wrapperProps?.style,
					...( icon.src && {
						'--list-icon': `url("data:image/svg+xml,${ encodeURIComponent(
							icon.src
						) }")`,
					} ),
					...( iconSize && {
						'--wp-block-list--icon-size': iconSize,
					} ),
					...( iconGap && {
						'--wp-block-list--icon-gap': iconGap,
					} ),
					...( iconVerticalOffset && {
						'--wp-block-list--icon-vertical-offset':
							iconVerticalOffset,
					} ),
					...( iconColor && {
						'--wp-block-list--icon-color': iconColor,
					} ),
				},
			} ),
		};

		return (
			<BlockListBlock
				{ ...props }
				className={ className }
				wrapperProps={ wrapperProps }
			/>
		);
	};
}, 'BlockList' );
