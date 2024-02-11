using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Services;

namespace SHFT.MyIdentityUsers
{
    public interface IMyIdentityUserAppService : IApplicationService
    {
        Task<MyIdentityUserDto> CreateAsync(CreateMyIdentityUserDto input);
    }
}
