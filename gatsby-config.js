module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `5atldjqij8iq`,
                accessToken: `49e46d0ebd7b7610b8244fa79494f6961fcd38b850ea69bdb4b0c4b6fe04b205`
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Open Sans:300,400,500,600,700,800`]
            }
        }
    ]
}