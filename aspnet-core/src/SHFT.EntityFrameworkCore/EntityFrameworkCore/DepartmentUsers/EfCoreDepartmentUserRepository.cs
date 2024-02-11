using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using SHFT.DepartmentUsers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Identity;

namespace SHFT.EntityFrameworkCore.DepartmentUsers
{
    public class EfCoreDepartmentUserRepository : EfCoreRepository<SHFTDbContext, DepartmentUser, Guid>, IDepartmentUserRepository
    {
        private readonly IIdentityUserRepository _identityUserRepository;
        public EfCoreDepartmentUserRepository(IDbContextProvider<SHFTDbContext> dbContextProvider, IIdentityUserRepository identityUserRepository) : base(dbContextProvider)
        {
            _identityUserRepository = identityUserRepository;
        }

        public async Task<IdentityUser> AsignToDepartmentAsync(Guid departmentId, Guid userId)
        {            
            await DbSet.AddAsync(new DepartmentUser { DepartmentId = departmentId, UserId = userId });
            return await _identityUserRepository.GetAsync(userId);            
        }

       

        public async Task<DepartmentUser> FindByUserId(Guid userId)
        {
            return await DbSet.FirstOrDefaultAsync(x => x.UserId == userId);
        }
    }
}
