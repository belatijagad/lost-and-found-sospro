const contentful = require('contentful-management')

const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_KEY,
})

// Create entry
client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment('<environment-id>'))
    .then((environment) => environment.createEntryWithId(penemuanBarang, '<entry_id>', {
        fields: {
            title: {
                'en-US': 'Entry title'
            }
        }
    }))
    .then((entry) => console.log(entry))
    .catch(console.error)