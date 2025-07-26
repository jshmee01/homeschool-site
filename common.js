/*
 * Common functions used across the homeschool static site.
 *
 * Data persistence is implemented via localStorage and sessionStorage.
 * Each user’s progress and schedule are stored in keyed objects per user.
 */

// Default users.  You can change the usernames, emails and passwords here.
const USERS = [
  { username: 'admin', email: 'admin@example.com', password: 'changeme' },
  { username: 'nancy', email: 'xanydouart@gmail.com', password: 'changeme' },
];

/**
 * Attempt to authenticate a user given a username or email and password.
 * Returns the user object on success or undefined on failure.
 */
function authenticate(usernameOrEmail, password) {
  return USERS.find(
    (user) =>
      (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
      user.password === password,
  );
}

/**
 * Redirect to login page if no user is currently logged in.
 * Should be called at the top of protected pages.
 */
function requireLogin() {
  if (!sessionStorage.getItem('currentUser')) {
    window.location.href = 'index.html';
  }
}

/**
 * Log out the current user and redirect to login page.
 */
function logout() {
  sessionStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

/**
 * Get the username of the currently logged in user.
 */
function getCurrentUser() {
  return sessionStorage.getItem('currentUser');
}

// Progress functions
function loadProgress() {
  const data = JSON.parse(localStorage.getItem('progress') || '{}');
  const user = getCurrentUser();
  return data[user] || [];
}

function saveProgress(entries) {
  const data = JSON.parse(localStorage.getItem('progress') || '{}');
  const user = getCurrentUser();
  data[user] = entries;
  localStorage.setItem('progress', JSON.stringify(data));
}

// Schedule functions
function loadSchedule() {
  const data = JSON.parse(localStorage.getItem('schedule') || '{}');
  const user = getCurrentUser();
  return data[user] || [];
}

function saveSchedule(events) {
  const data = JSON.parse(localStorage.getItem('schedule') || '{}');
  const user = getCurrentUser();
  data[user] = events;
  localStorage.setItem('schedule', JSON.stringify(data));
}
