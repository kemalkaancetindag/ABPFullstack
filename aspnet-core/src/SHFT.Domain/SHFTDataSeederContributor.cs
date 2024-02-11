using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Volo.Abp.PermissionManagement;

namespace SHFT
{
    public class SHFTDataSeederContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IIdentityRoleRepository _roleRepository;
        private readonly IPermissionManager _permissionManager;

        public SHFTDataSeederContributor(IIdentityRoleRepository roleRepository, IPermissionManager permissionManager)
        {
            _roleRepository = roleRepository;
            _permissionManager = permissionManager;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            await SeedRolesAsync();
            await SeedPermissionsAsync();
        }

        private async Task SeedRolesAsync()
        {
            var role = await _roleRepository.FindByNormalizedNameAsync("EMPLOYEE");
            if(role == null)
            {
                role = new IdentityRole(Guid.NewGuid(), "employee");                
                await _roleRepository.InsertAsync(role);
            }
        }

        private async Task SeedPermissionsAsync()
        {
            await _permissionManager
             .SetForRoleAsync("admin", "SHFT.Departments", true);
            await _permissionManager
            .SetForRoleAsync("admin", "SHFT.Departments.Create", true);
            await _permissionManager
          .SetForRoleAsync("admin", "SHFT.Departments.Edit", true);
            await _permissionManager
          .SetForRoleAsync("admin", "SHFT.Departments.Delete", true);

            await _permissionManager
            .SetForRoleAsync("admin", "SHFT.Users", true);
            await _permissionManager
            .SetForRoleAsync("admin", "SHFT.Users.Create", true);
            await _permissionManager
          .SetForRoleAsync("admin", "SHFT.Users.Edit", true);
            await _permissionManager
          .SetForRoleAsync("admin", "SHFT.Users.Delete", true);

            await _permissionManager.SetForRoleAsync("employee", "Identity.Application", true);
            await _permissionManager.SetForRoleAsync("employee", "SHFT.Users", true);
            await _permissionManager.SetForRoleAsync("employee", "SHFT.Departments", true);
            await _permissionManager.SetForRoleAsync("employee", "SHFT.Users.Create", true);
            await _permissionManager.SetForRoleAsync("employee", "SHFT.Users.Edit", false);
            await _permissionManager.SetForRoleAsync("employee", "SHFT.Users.Delete", false);
            //ABP ROLES
            await _permissionManager.SetForRoleAsync("employee", "AbpIdentity.Roles", true);
            await _permissionManager.SetForRoleAsync("employee", "AbpIdentity.Users", true);
            await _permissionManager.SetForRoleAsync("employee", "AbpIdentity.Users.Create", true);




        }
    }
}
