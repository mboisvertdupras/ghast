Package.describe({
	name: 'voident:ghast',
	version: '0.0.6',
	summary: 'A terrifyingly simple CSS framework.',
	git: 'https://github.com/voident/ghast.git',
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.0');
	api.addFiles([
		'css/ghast.css'
	], 'client');
});
