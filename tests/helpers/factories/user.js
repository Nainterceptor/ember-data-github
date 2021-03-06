export default {
  defineUser: function() {
    Factory.define('user')
      .sequence('id')
      .sequence('login', function(i) { return `user${i}`; })
      .sequence('name', function(i) { return `User ${i}`; })
      .attr('type', 'User')
      .sequence('avatar_url', function(i) { return `user${i}-avatar.gif`; })
      .sequence('repos_url', function(i) { return `https://api.github.com/users/user${i}/repos`; });
  }
};
