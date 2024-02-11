using Microsoft.EntityFrameworkCore;
using SHFT.Departments;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Repositories.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace SHFT.EntityFrameworkCore.Departments
{
    public class EfCoreDepartmentRepository : EfCoreRepository<SHFTDbContext, Department, Guid>, IDepartmentRepository
    {
        public EfCoreDepartmentRepository(IDbContextProvider<SHFTDbContext> dbContextProvider) : base(dbContextProvider)
        {

        }

        public async Task<List<Department>> GetListAsync(
            int skipCount,
            int maxResultCount,
            string sorting)
        {
            return await DbSet
                .Skip(skipCount)
                .Take(maxResultCount)
                .ToListAsync();
        }

    }
}
