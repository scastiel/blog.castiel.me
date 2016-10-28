var path = require('path');
var process = require('process');
module.exports = {
    baseUrl: process.env.BASE_URL || 'http://blog.castiel.me',
    title: 'Another webdev blog',
    description: 'I\'m [Sébastien Castiel](https://twitter.com/scastiel), and I talk about web development and some other stuff.',
    footer: 'All content distributed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license. Powered by [Miblog](https://github.com/scastiel/miblog).',
    nbPostsPerPage: 3,
    postsDirectory: path.join(__dirname, 'posts'),
    publicDirectory: path.join(__dirname, 'public'),
    disqusId: 'blog-castiel-me',
    analyticsId: 'UA-86441091-1'
};
