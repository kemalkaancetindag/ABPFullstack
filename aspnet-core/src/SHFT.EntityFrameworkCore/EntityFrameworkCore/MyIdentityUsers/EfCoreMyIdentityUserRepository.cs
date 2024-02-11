using Microsoft.EntityFrameworkCore;
using Polly;
using SHFT.DepartmentUsers;
using SHFT.MyIdentityUsers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Identity;

namespace SHFT.EntityFrameworkCore.MyIdentityUsers
{
    public class EfCoreMyIdentityUserRepository : EfCoreRepository<SHFTDbContext, DepartmentUser, Guid>, IMyIdentityUserRepository
    {
        private readonly IIdentityUserRepository _identityUserRepository;
        private readonly IDepartmentUserRepository _departmentUserRepository;
        public EfCoreMyIdentityUserRepository(IDbContextProvider<SHFTDbContext> dbContextProvider, IIdentityUserRepository identityUserRepository) : base(dbContextProvider)
        {
            _identityUserRepository = identityUserRepository;
        }

        

     

    }
}
