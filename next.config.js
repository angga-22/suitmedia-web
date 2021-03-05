module.exports = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/homepage',
            },
            {
                source: '/ideas',
                destination: '/ideas',
            },
        ]
    },
}