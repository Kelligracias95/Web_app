module.exports = ({ routes }) => [
  // ... other routes

  {
    method: 'POST',
    path: '/auth/local/register',
    handler: 'auth.register',
  },
  {
    method: 'POST',
    path: '/auth/local',
    handler: 'auth.login',
  },

  {
    method: 'POST',
    path: '/api/gasts',
    handler: 'gast.create',
  },

  {
    method: 'POST',
    path: '/api/students/register',
    handler: 'student.create',
  },
  {
    method: 'POST',
    path: '/api/students/login',
    handler: 'student.login',
  },
 
];
