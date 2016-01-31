Package.describe({
	name: 'Carboncss:carbon',
	version: '0.0.1',
	summary: 'An easy to use and spritely CSS framework.',
	git: 'https://github.com/Carboncss/carbon.git',
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.0');
	api.addFiles([
		'dist/carbon.css'
	], 'client');
});
