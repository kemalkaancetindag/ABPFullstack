using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Identity;

namespace SHFT.Departments
{
    public interface IDepartmentAppService : IApplicationService
    {
        Task<DepartmentDto> GetAsync(Guid id);
        Task<PagedResultDto<DepartmentDto>> GetListAsync(GetDepartmentListDto input);

        Task<PagedResultDto<DepartmentDto>> CreateAsync(CreateDepartmentDto input);

        Task<PagedResultDto<DepartmentDto>> UpdateAsync(Guid id, UpdateDepartmentDto input);
        Task<PagedResultDto<DepartmentDto>> DeleteAsync(Guid id);


    }
}
