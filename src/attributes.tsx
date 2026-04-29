export const addListIconAttributes = ( settings: any, name: string ) => {
	if ( 'core/list' !== name ) {
		return settings;
	}

	return {
		...settings,
		attributes: {
			...settings.attributes,
			icon: {
				type: 'object',
			},
			iconSize: {
				type: 'string',
				default: '',
			},
			iconGap: {
				type: 'string',
				default: '',
			},
			iconOutside: {
				type: 'boolean',
				default: true,
			},
			iconVerticalOffset: {
				type: 'string',
				default: '',
			},
			iconColor: {
				type: 'string',
				default: '',
			},
		},
	};
};
