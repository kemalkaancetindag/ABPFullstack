# Known Issues and Information
**You need to clear your browser cookies for each login cache otherwise it will throw Forgery Token error. I have tried to change cookies `SameSite` attribute to `None` from `Lax` but I wasn't able to (I needed more time to be honest :) )**

**Make sure that reaact app runs on port `3000` or you will get CORS error**

**If backend runs on different port then `44390` go to `shft-task-ui\src\api\ApiClient.ts` and change the `baseUrl`**

**If you just instantly login and cant see anything delete the local storage key `auth` from your browser. (I have tries to use `/connect/token` on identity server to get `JWT` and use it as `Bearer` but somehow identity server didn't add `aud` audience claim to its token therefore it wasn't a valid token so i couldn't authorize client to server.)**

# Prerequisites

* [.NET 8.0+ SDK](https://dotnet.microsoft.com/download/dotnet)
* [NodeJS](https://nodejs.org/en)

# Used Technologies

* Language: [C#](https://learn.microsoft.com/en-us/dotnet/csharp/)
* Framework: [ASP.NET Core](https://dotnet.microsoft.com/en-us/apps/aspnet)
* Backend: [ABP Framework](https://docs.abp.io/en/abp/latest)
* Database: [MS SQL](https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16)

# How To Run
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



