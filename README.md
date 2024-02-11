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
 ┃ ┣ 📂department-detail
 ┃ ┃ ┣ 📜department-detail.css
 ┃ ┃ ┗ 📜DepartmentDetail.tsx
 ┃ ┣ 📂departments
 ┃ ┃ ┣ 📜departments.css
 ┃ ┃ ┗ 📜Departments.tsx
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜login.css
 ┃ ┃ ┗ 📜Login.tsx
 ┃ ┣ 📂user-detail
 ┃ ┃ ┣ 📜user-detail.css
 ┃ ┃ ┗ 📜UserDetail.tsx
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