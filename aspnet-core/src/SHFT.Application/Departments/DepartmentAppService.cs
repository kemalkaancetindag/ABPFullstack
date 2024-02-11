using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;


namespace SHFT.Departments
{
    [Authorize]
    public class DepartmentAppService : SHFTAppService, IDepartmentAppService
    {
        private readonly IDepartmentRepository _departmentRepository;

        public DepartmentAppService(IDepartmentRepository departmentRepository)
        {
            _departmentRepository = departmentRepository;
        }

        public async Task<DepartmentDto> GetAsync(Guid id)
        {
            var department = await _departmentRepository.GetAsync(id);
            return ObjectMapper.Map<Department, DepartmentDto>(department);
        }

        public async Task<PagedResultDto<DepartmentDto>> GetListAsync(GetDepartmentListDto input)
        {
            if(input.Sorting.IsNullOrWhiteSpace())
            {
                input.Sorting = nameof(Department.Name);
            }

            var departments = await _departmentRepository.GetListAsync(input.SkipCount, input.MaxResultCount, input.Sorting);
            var totalCount = await _departmentRepository.GetCountAsync();


            return new PagedResultDto<DepartmentDto>(
                    totalCount,
                    ObjectMapper.Map<List<Department>, List<DepartmentDto>>(departments));
        }

        public async Task<PagedResultDto<DepartmentDto>> CreateAsync(CreateDepartmentDto input)
        {
            await _departmentRepository.InsertAsync(new Department
            {
                Name = input.Name
            });
            
            var departments = await _departmentRepository.GetListAsync();

            return new PagedResultDto<DepartmentDto>(10, ObjectMapper.Map<List<Department>, List<DepartmentDto>>(departments));
        }

        public async Task<PagedResultDto<DepartmentDto>> UpdateAsync(Guid id, UpdateDepartmentDto input)
        {
            var department = await _departmentRepository.GetAsync(id);
        

            department.Name = input.Name;

            await _departmentRepository.UpdateAsync(department);
            var departments = await _departmentRepository.GetListAsync();
            return new PagedResultDto<DepartmentDto>(10, ObjectMapper.Map<List<Department>, List<DepartmentDto>>(departments));

        }
        public async Task<PagedResultDto<DepartmentDto>> DeleteAsync(Guid id)
        {
            await _departmentRepository.DeleteAsync(id);
            var departments = await _departmentRepository.GetListAsync();
            return new PagedResultDto<DepartmentDto>(10, ObjectMapper.Map<List<Department>, List<DepartmentDto>>(departments));
        }

      
    }
}
