using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;

namespace SHFT.DepartmentUsers
{
    public interface IDepartmentUserRepository : IRepository<DepartmentUser, Guid>
    {
        Task<IdentityUser> AsignToDepartmentAsync(Guid departmentId, Guid userId);
        Task<DepartmentUser> FindByUserId(Guid userId);

    }
}
