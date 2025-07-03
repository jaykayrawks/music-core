# Music Core

This is a Micro frontend Host App:

home page renders a login page with following roles:
 - admin : has acess to edit the music library
 - user : View only acess to the music library

Renders follwing remote modules after login

Remote modules: (#update the remote entry path with proper remote paths local or server before build)
 - library/collection : 
    - local: localhost:3001
    - Server: https://music-library-snowy.vercel.app



To run app in local:
 npm i : installs dependencies
 cd music-host
 npm run dev : runs a dev server on localhost:3001
 npm run build: Build the bundle
 npm run preview: runs the build on local server
 npm run test: runs unit tests
 npm run test:coverage   Runs test coverage