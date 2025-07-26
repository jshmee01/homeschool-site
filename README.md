# Homeschool Website (Static Version)

This static website provides a simple interface for your personal homeschool.  It runs entirely in your web browser without any server‑side code or external dependencies.  Your data is stored locally in your browser using `localStorage` and `sessionStorage`, so it never leaves your computer.

## Features

- **Login firewall**: a basic login page restricts access to the dashboard and other pages.  Two accounts are configured by default: `admin` and `nancy` (whose username is based on her email).  The default password for both accounts is `changeme`.  You can change these credentials by editing the `USERS` array in `common.js`.
- **Progress tracker**: log daily homeschooling activities with fields for date, child name, subjects covered, hours and notes.  Entries are stored per user and displayed in a table.
- **Schedule builder**: record upcoming events or lessons with optional start and end times.  Events are also stored per user.
- **Mission statement**: a static page reminding your family why you homeschool.

## Running the website

Because everything is client‑side, you can open `index.html` directly in your browser without any server.  However, most browsers block `localStorage` for pages loaded from the local filesystem.  To avoid this, serve the files with a simple HTTP server.

If you have Python installed, navigate to this folder and run:

```
python3 -m http.server 8000
```

Then open your browser to `http://localhost:8000/index.html`.

Alternatively, if you have Node.js installed you can run:

```
npx http-server -p 8000
```

You’ll be greeted with the login page.  Enter one of the default usernames (`admin` or `nancy`), along with the password `changeme`.  After logging in you’ll see the dashboard and can navigate to the progress tracker or schedule builder.

## Security considerations

This static site is intended for personal use on a private network.  The login “firewall” uses a very simple password check in client‑side JavaScript.  It is **not secure** enough for hosting on a public network.  To improve security, you could:

- Change the default passwords in `common.js`.
- Use a more complex password and consider hashing it within the script.
- Serve the site over HTTPS and restrict access via your router’s firewall.

Because data is stored locally in your browser, clearing your browser cache or using another device will result in a blank database.  Consider exporting your data manually if you need a backup.
