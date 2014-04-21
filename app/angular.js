// Reference angular object instead of wrapping it in browserify.
// This gives us benefits of being able to require('angular') without
// bloat of importing external source into our app's source.
module.exports = window.angular;