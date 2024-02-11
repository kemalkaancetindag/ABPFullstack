using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Identity;

namespace SHFT.DepartmentUsers
{
    public class DepartmentUserAppService : SHFTAppService, IDepartmentUserAppService
    {
        private readonly IDepartmentUserRepository _departmentUserRepository;
        private readonly IIdentityUserRepository _identityUserRepository;        

        public DepartmentUserAppService(IDepartmentUserRepository departmentUserRepository, IIdentityUserRepository identityUserRepository)
        {
            _departmentUserRepository = departmentUserRepository;
            _identityUserRepository = identityUserRepository;
        }

        public async Task<IdentityUserDto> AsignToDepartmentAsync(AsignUserToDepartmentDto input)
        {
            await _departmentUserRepository.AsignToDepartmentAsync(input.DepartmentId, input.UserId);
            var user = await _identityUserRepository.GetAsync(input.UserId);

            return ObjectMapper.Map<IdentityUser, IdentityUserDto>(user);
            
        }
    }
}
