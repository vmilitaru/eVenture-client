# eVenture Application

![eVenture-home](https://user-images.githubusercontent.com/70764326/106621966-01bcf980-656b-11eb-9f22-60b142d05f1c.png)![eVenture-home](https://user-images.githubusercontent.com/70764326/106622115-2b762080-656b-11eb-9671-ce64e2262d87.png)

A [School of Code](https://www.schoolofcode.co.uk/) event management and ticketing application for organising and delivering the community classes, another [School of Code](https://www.schoolofcode.co.uk/) initiative to introduce people from diverse backgrounds to the world of tech. Working in a team of five people, we took on the challenge and we identified the pain points of participants and organisers for this problem. And the solution that we came up with was a web app that allows the bootcampers/organisers to create and manage the events and forthcoming participants to sign up to an upcoming event.

-   Participants can login and sign up for an event.They also have the posibility to see the list of their upcoming events in **My Events** page, where they can also cancel their registration to a particular event .

![eVenture-myEvents](https://user-images.githubusercontent.com/70764326/106624836-fae3b600-656d-11eb-8cfd-d9ee81513f68.png)

-   Organisers can create and edit events, a functionality to which only the organisers have access based on the access permisions associated to their account in the Auth0 dashboard.
<table>
  <tr>
   <td align="center"><a href="https://github.com/Teeenbe"><img src="https://user-images.githubusercontent.com/70764326/106625765-e48a2a00-656e-11eb-8ef6-4a3a770ba96d.png"  alt="create an event"/><br /></td>
  <td align="center"><a href="https://github.com/michaelfswann"><img src="https://user-images.githubusercontent.com/70764326/106626547-b9eca100-656f-11eb-970e-bd9895789bb0.png"  alt=""/><br /></td>
  </tr>
</table>

- Organisers can track the attendance to a specific event.

![eVenture-organiser-view-of-a-specific-event](https://user-images.githubusercontent.com/70764326/106626276-7003bb00-656f-11eb-82c1-384ef7443abe.png)

 If you want to see the backend code of this application head to this [repository](https://github.com/vmilitaru/eVenture-server.git).
 
## Live Project

Here is the [deployed version](https://eventure.vercel.app/).

## Stack

- [React](https://reactjs.org/) with [Next.js](https://nextjs.org/)
- [Auth0](https://auth0.com/)
- [Cloudinary](http://cloudinary.com/)
- [Material-UI](https://material-ui.com/)
- [Vercel](https://vercel.com/)


## Getting Started


1. Make sure that you have Node.js installed and clone the repo.

```bash
git clone https://github.com/vmilitaru/eVenture-client.git
cd into the folder
```

2. Next, install all the package dependencies to run the app

```bash
npm install
# or
npm i
```

## Configuring Auth0

3. Go to the [Auth0 dashboard](https://manage.auth0.com/) and create a new application of type _Single Page Application_ and make sure to configure the following
4. Go to the settings tab of the application page
5. Configure the following settings:
   -  _Allowed Callback URLs_: Should be set to `http://localhost:3000` when testing locally or typically to `https://myapp.com` when deploying your application and any other URL to which you want the user to be redirected to after the autentication
   - _Allowed Logout URLs_: Should be set to `http://localhost:3000/` when testing locally or typically to `https://myapp.com/` when deploying your application or any other URL to which you want the user to be redirected to after loging out from Auth0
   - _Allowed Web Origins_: Should be set to `http://localhost:3000/` when testing locally or typically to `https://myapp.com/` when deploying your application
   - _Allowed Origins (CORS)_: Should be set to `http://localhost:3000/` when testing locally or typically to `https://myapp.com/` when deploying your application
6. Everything else can stay as default
7. Save the settings
8. Go to the _APIs_ page from the [Auth0 dashboard](https://manage.auth0.com/) and create an API. Based on the permisions that we are going to assign to this API we are  restricting the users from accessing some of the project APIs.
9. To create the API you will need to fill in the following inputs:
    - _Name_ : name the API
    - _Identifier_ : logical identifier of the API - this field cannot be modified  👉  _this is the `audience` that you need to add as environment variable in the .env.local file_
    - _Signing Algorithm_ : stays as default _`RS256`_
10. Go to the _Settings_ tab of the new created API page and in the _RBAC_ section configure the following settings:
     - Enable _Enable RBAC_ option
     - Enable _Add Permissions in the Access Token_ option
11. Save the settings

12. Stay on the new created API page but now go to Permisssions tab and add a permission to the API - remember by doing this we are making sure that we are allowing only certain users to have the organiser access permissions 

```bash
use:role #Permission
Use permissions based on role #Description
```
13. Go to the _Users & Roles> Roles_ page from the [Auth0 dashboard](https://manage.auth0.com/) and create a role :

```bash
organiser #Name
Access permissions based on the organiser role  #Description
```
15. Click on the _Action_ menu (3 dots) of the new created role and select _View details_
16. Under _Permissions_ tab of the new added role, _organiser_ , page you will be able to _ADD PERMISSIONS_ to the API that we created at _Step 9_ . Every time when we try to acess some protected APIs, we will return the permissions associated to the user account in the _Access Token_, validating the requests based on the user permissions. 

17. To assign the **organiser role** to a particular user account if we stay on the new added role, _organiser_ , page  we just need to go on _Users_ tab _ADD USERS_ and select the account that we want to grant organiser permissions to. Another way of doing this is to go on _Users & Roles >Actions > Assign To Users_  - easy as that .
18. It is not enough for us to return the permissions in the accessToken, because if we want to do conditional rendering we need to have access to the role assign to the user account in our aplication and for that we need to  add the role to the idToken.Therefore we will need to create a rule in the _Rules_ menu from the [Auth0 dashboard](https://manage.auth0.com/). Make sure that the rule that you create using the following code snippet is enabled.

```bash
function (user, context, callback) {
const namespace = `http://localhost:3000/`;
const assignedRoles = (context.authorization || {}).roles;

let idTokenClaims = context.idToken || {};

idTokenClaims[ `${namespace}/roles` ] = assignedRoles;

context.idToken = idTokenClaims;

callback(null, user, context);
}
```
19. If you want to allow the users to log in to the application using their Google profile please follow the next [guide](https://auth0.com/docs/connections/social/google).

### Set up environment variables

To connect the app with Auth0, you'll need to add the settings from your Auth0 application as environment variables.

15. Copy the content of `.env.example` into a new file called `.env.local` at the root of this project, then add the missing environment variables:

    - `NEXT_PUBLIC_AUTH0_DOMAIN` - Can be found in the Auth0 dashboard under _Applications_ ,select the created Application and go to `settings`.
    - `NEXT_PUBLIC_AUTH0_CLIENT_ID` - Can be found in the Auth0 dashboard under _Applications_ ,select the created Application and go to `settings`.
    - `NEXT_PUBLIC_AUTH0_AUDIENCE` - Can be found in the Auth0 dashboard under _APIs_ ,got to `settings` tab and copy the _Identifier_.
    - `NEXT_PUBLIC_SERVER_URL` - Should be set to `http://localhost:5000` when testing locally (if you check the back end code of this project you will see that 5000 is the port to which the express server is currently listening to) or typically to `https://myserver.com` when deploying the  server.
    - `NEXT_PUBLIC_CLIENT_URL` - Should be set to `http://localhost:3000` when testing locally or typically to `https://myapp.com` when deploying the server.

## Available Scripts

In the project directory, you can run:

```bash
npm run dev  # runs the app in the development mode
```
```bash
npm run build # create a production build.
```
```bash
npm run start # start the app in production mode.
```
## Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/import/git?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/fadumoaideed"><img src="https://avatars0.githubusercontent.com/u/71390607?s=60&v=4" width="120px;" alt=" Fadumo avatar"/><b>Fadumo Aideed</b></a></td>
    <td align="center"><a href="https://github.com/vmilitaru"><img src="https://avatars0.githubusercontent.com/u/70764326?s=120&v=4" width="120px;" alt="Valentina avatar"/><b>Valentina Militaru</b></a></td>
   <td align="center"><a href="https://github.com/Cpanda3"><img src="https://ca.slack-edge.com/T6L933W4X-U019WPN4M51-380f3738d180-512" width="120px;" alt="Amelia-avatar"/><b>Amelia Collins-Patel</b></a></td>
   <td align="center"><a href="https://github.com/Teeenbe"><img src="https://ca.slack-edge.com/T6L933W4X-U019WQM1Q4V-183cc3dedaa7-512" width="120px;" alt="Tom-avatar"/><b>Tom Bennet</b></a></td>
  <td align="center"><a href="https://github.com/michaelfswann"><img src="https://avatars3.githubusercontent.com/u/20445671?s=64&v=4" width="120px;" alt="Michael-avatar"/><b>Michael Swann</b></a></td>
  </tr>
</table>

