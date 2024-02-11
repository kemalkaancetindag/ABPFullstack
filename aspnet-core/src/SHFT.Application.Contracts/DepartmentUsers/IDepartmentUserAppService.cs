using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;
using Volo.Abp.Identity;

namespace SHFT.DepartmentUsers
{
    public interface IDepartmentUserAppService : IApplicationService
    {
        Task<IdentityUserDto> AsignToDepartmentAsync(AsignUserToDepartmentDto input);

    }
}
