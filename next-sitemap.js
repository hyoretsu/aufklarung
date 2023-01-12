const { homepage: siteUrl } = require('./package.json');

module.exports = {
    alternateRefs: [
        {
            href: `${siteUrl}/pt`,
            hreflang: 'pt',
        },
    ],
    changefreq: 'monthly',
    generateRobotsTxt: true,
    priority: 1,
    siteUrl,
};
