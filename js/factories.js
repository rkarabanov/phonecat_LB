phonecatApp


///Factory
    .factory('Phone', [
            '$resource', function ($resource) {
                return $resource('phones/:phoneId.:format', {
                    phoneId: 'phones',
                    format: 'json',
                    apiKey: 'someKeyThis'
                });
            }
        ]
    );