var path = require('path');
var process = require('process');
module.exports = {
  baseUrl:
    process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || 3000),
  title: 'Another webdev blog',
  description:
    "I'm [Sébastien Castiel](https://twitter.com/scastiel), and I talk about web development and some other stuff.",
  footer:
    'All content distributed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license. Powered by [Miblog](https://github.com/scastiel/miblog).',
  nbPostsPerPage: 10,
  postsDirectory: path.join(__dirname, 'posts'),
  publicDirectory: path.join(__dirname, 'public'),
  disqusId: process.env.DISQUS_ID,
  analyticsId: process.env.ANALYTICS_URL,
};
