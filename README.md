# BACKEND

## Known Issues and Information
**You need to clear your browser cookies for each login cache otherwise it will throw Forgery Token error. I have tried to change cookies `SameSite` attribute to `None` from `Lax` but I wasn't able to (I needed more time to be honest :) )**

**Make sure that reaact app runs on port `3000` or you will get CORS error**

**If backend runs on different port then `44390` go to `shft-task-ui\src\api\ApiClient.ts` and change the `baseUrl`**

**If you just instantly login and cant see anything delete the local storage key `auth` from your browser. (I have tries to use `/connect/token` on identity server to get `JWT` and use it as `Bearer` but somehow identity server didn't add `aud` audience claim to its token therefore it wasn't a valid token so i couldn't authorize client to server.)**

## Prerequisites

* [.NET 8.0+ SDK](https://dotnet.microsoft.com/download/dotnet)
* [NodeJS](https://nodejs.org/en)

## Used Technologies

* Language: [C#](https://learn.microsoft.com/en-us/dotnet/csharp/)
* Framework: [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet)
* Backend: [ABP Framework](https://docs.abp.io/en/abp/latest)
* Database: [MS SQL](https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16)

## How To Run
- **WARNING: Make Sure You Already Have The Node JS Runtime Installed On Your Computer.**
- **WARNING: Make Sure You Already Have The SQL Server Installed On Your Computer.**
- **WARNING: Make Sure You Already Have The Visual Studio Installed On Your Computer.**
- First you need to install the `abp` on your computer. You can run the command below in your CLI to install.
`dotnet tool install -g Volo.Abp.Cli`
- After you finished downloading `abp` open the solution file in your Visual Studio app. Open developer shell and run the command below (Run the following command in the directory of your final application).
`abp install-libs` 
- Now we need to change some connection strings to connect the database. You need to go `aspnet-core\src\SHFT.DbMigrator\appsettings.json`  file and change the `SERVER_NAME` variable.
![migrator appsettings](https://github.com/kemalkaancetindag/ABPFullstack/blob/main/aspnet-core/readme-assets/con_string_migrator.png?raw=true)
- After you changed it you need to go to `aspnet-core\src\SHFT.HttpApi.Host\appsettings.json` file and change the same variable.
![host appsettings](https://github.com/kemalkaancetindag/ABPFullstack/blob/main/aspnet-core/readme-assets/con_string_host.png?raw=true)
- **WARNING: Make Sure You Have Changed It To The Correct Name Below Is An Example Image For SERVER_NAME**
![server name example](https://github.com/kemalkaancetindag/ABPFullstack/blob/main/aspnet-core/readme-assets/sql-connection.png?raw=true)
- After changing the values open solution in Visual Studio and run the DbMigrator project once. This will create default database for you.
![migrator project](https://github.com/kemalkaancetindag/ABPFullstack/blob/main/aspnet-core/readme-assets/migrator-project.png?raw=true)
- Now we have our database ready. Set HttpApi.Host project as startup project then run it. You are ready to go.
![api host](https://github.com/kemalkaancetindag/ABPFullstack/blob/main/aspnet-core/readme-assets/migrator-project.png?raw=true)





# FRONT END

## Prerequisites

* [NodeJS](https://nodejs.org/en)
* npm (NodeJS Package Manager)

## Used Technologies

* Language: [typescript](https://www.typescriptlang.org/docs/)
* Web Framework: [react](https://react.dev/learn)
* State Managment: [redux](https://redux.js.org/api/api-reference)
* API Client: [axios](https://axios-http.com/docs/intro)
* API Client Manager: [react-query](https://tanstack.com/query/v3/docs/framework/react/overview) (For caching and managing API requests)
* Routing: [react-router-dom](https://reactrouter.com/en/main)

## How To Run
- **WARNING: Make Sure You Already Have The Node JS Runtime Installed On Your Computer.**
- First you need to install the required packages with ``npm`` you can use the command below in your CLI.
- ``
npm install
 ``
- After you finished installing the packages you are ready to go. Just run the command below in your CLI.
- ``
npm run start
``
- **WARNING: The Commands Above Should Be Ran In Project Directory.**

## Folder Structre
Folder structre organization in this project pretty straight forward. All files and folders which are used in this project are inside in `src` folder.

The `api` folder contains the code for every API request used in this project.

The `assets` folder contains static assets used in this project.

The `components` folder consists multiple folders which contains the `{component-name}.tsx` file and `{component-name}.css` file. (`reusable` folder contains the components which are used multiple times or used frequently)

The `pages` folder contains the pages which are used in this project as `{page-name}.tsx` file and `{page-name}.css` file.

The `state` folder contains the `redux` related code inside and take cares of the state management.

The `utils` folder contains the logic or systems which are used frequently.

### Folder Structre Visualized

📦src
 ┣ 📂api
 ┃ ┣ 📂model
 ┃ ┃ ┣ 📜AppModels.ts
 ┃ ┃ ┣ 📜AuthModels.ts
 ┃ ┃ ┣ 📜DepartmentModels.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜UserModels.ts
 ┃ ┣ 📂service
 ┃ ┃ ┣ 📜AppService.ts
 ┃ ┃ ┣ 📜AuthService.ts
 ┃ ┃ ┣ 📜DepartmentService.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜UserService.ts
 ┃ ┣ 📜ApiClient.ts
 ┃ ┗ 📜ApiUtils.ts
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┃ ┗ 📜login-placeholder.png
 ┃ ┗ 📜index.ts
 ┣ 📂components
 ┃ ┣ 📂departments
 ┃ ┃ ┗ 📂department-data-modal
 ┃ ┃ ┃ ┣ 📜department-data-modal.css
 ┃ ┃ ┃ ┗ 📜DepartmentDataModal.tsx
 ┃ ┣ 📂reusable
 ┃ ┃ ┣ 📂button
 ┃ ┃ ┃ ┣ 📜button.css
 ┃ ┃ ┃ ┗ 📜Button.tsx
 ┃ ┃ ┣ 📂input
 ┃ ┃ ┃ ┣ 📜input.css
 ┃ ┃ ┃ ┗ 📜Input.tsx
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┣ 📜layout.css
 ┃ ┃ ┃ ┗ 📜Layout.tsx
 ┃ ┃ ┣ 📂loading
 ┃ ┃ ┃ ┣ 📜loading.css
 ┃ ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┣ 📜modal.css
 ┃ ┃ ┃ ┗ 📜Modal.tsx
 ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┣ 📜navbar.css
 ┃ ┃ ┃ ┗ 📜Navbar.tsx
 ┃ ┃ ┣ 📂select
 ┃ ┃ ┃ ┣ 📜select.css
 ┃ ┃ ┃ ┗ 📜Select.tsx
 ┃ ┃ ┣ 📂table
 ┃ ┃ ┃ ┣ 📜table.css
 ┃ ┃ ┃ ┗ 📜Table.tsx
 ┃ ┃ ┗ 📂text-area
 ┃ ┃ ┃ ┣ 📜text-area.css
 ┃ ┃ ┃ ┗ 📜TextArea.tsx
 ┃ ┣ 📂sidebar
 ┃ ┃ ┣ 📜sidebar.css
 ┃ ┃ ┗ 📜Sidebar.tsx
 ┃ ┣ 📂users
 ┃ ┃ ┗ 📂data-modal
 ┃ ┃ ┃ ┣ 📜users-data-modal.css
 ┃ ┃ ┃ ┗ 📜UsersDataModal.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂constants.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜Pagination.ts
 ┣ 📂enums
 ┃ ┣ 📜DepartmentDataModalModeEnum.ts
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜PageEnum.ts
 ┃ ┗ 📜UserDataModalModeEnum.ts
 ┣ 📂pages
 ┃ ┣
 ┃ ┣ 📂departments
 ┃ ┃ ┣ 📜departments.css
 ┃ ┃ ┗ 📜Departments.tsx
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜login.css
 ┃ ┃ ┗ 📜Login.tsx
 ┃ ┣ 
 ┃ ┣ 📂users
 ┃ ┃ ┣ 📜users.css
 ┃ ┃ ┗ 📜Users.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂state
 ┃ ┣ 📂action-creators
 ┃ ┃ ┣ 📜appActionCreators.ts
 ┃ ┃ ┣ 📜authActionCreators.ts
 ┃ ┃ ┣ 📜departmentActionCreators.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜userActionCreators.ts
 ┃ ┣ 📂action-types
 ┃ ┃ ┣ 📜appActionTypes.ts
 ┃ ┃ ┣ 📜authActionTypes.ts
 ┃ ┃ ┣ 📜departmentActionTypes.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜userActionTypes.ts
 ┃ ┣ 📂actions
 ┃ ┃ ┣ 📜appActions.ts
 ┃ ┃ ┣ 📜authActions.ts
 ┃ ┃ ┣ 📜departmentActions.ts
 ┃ ┃ ┗ 📜userActions.ts
 ┃ ┣ 📂reducers
 ┃ ┃ ┣ 📜appReducer.ts
 ┃ ┃ ┣ 📜authReducer.ts
 ┃ ┃ ┣ 📜departmentReducer.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜userReducer.ts
 ┃ ┣ 📂state-types
 ┃ ┃ ┣ 📜AppStateType.ts
 ┃ ┃ ┣ 📜AuthStateType.ts
 ┃ ┃ ┣ 📜DepartmentStateType.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜UserStateType.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜store.ts
 ┣ 📂utils
 ┃ ┣ 📜Alert.ts
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜ProtectedRoute.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜reset.css