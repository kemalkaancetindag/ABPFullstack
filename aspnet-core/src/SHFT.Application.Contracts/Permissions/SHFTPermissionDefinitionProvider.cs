using SHFT.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace SHFT.Permissions;

public class SHFTPermissionDefinitionProvider : PermissionDefinitionProvider
{

    
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(SHFTPermissions.GroupName);
        var departmentsPermission = myGroup.AddPermission(SHFTPermissions.Departments.Default);
        departmentsPermission.AddChild(SHFTPermissions.Departments.Create);
        departmentsPermission.AddChild(SHFTPermissions.Departments.Edit);
        departmentsPermission.AddChild(SHFTPermissions.Departments.Delete);

        var usersPermission = myGroup.AddPermission(SHFTPermissions.Users.Default);
        usersPermission.AddChild(SHFTPermissions.Users.Create);
        usersPermission.AddChild(SHFTPermissions.Users.Edit);
        usersPermission.AddChild(SHFTPermissions.Users.Delete);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(SHFTPermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<SHFTResource>(name);
    }
}
