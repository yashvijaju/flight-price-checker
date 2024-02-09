module.exports = {
    async rewrites() {
        return [
            {
            source: '/api/check_price',
            destination: 'https://mobile.southwest.com/',
            },
        ]
    },
};