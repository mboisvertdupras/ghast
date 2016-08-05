Package.describe({
	name: 'impria:ghast',
	version: '0.1.0',
	summary: 'A terrifyingly simple CSS framework.',
	git: 'https://github.com/impria/ghast.git',
	documentation: 'README.md'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.0');
	api.addFiles([
		'css/ghast.css'
	], 'client');
});
