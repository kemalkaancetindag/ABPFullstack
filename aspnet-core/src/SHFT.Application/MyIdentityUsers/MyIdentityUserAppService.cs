using SHFT.Departments;
using SHFT.DepartmentUsers;
using SHFT.MyIdentityUsers;
using System;
using System.Linq;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Identity;
using Volo.Abp.Uow;


namespace SHFT.Identity
{   
    public class MyIdentityUserAppService : SHFTAppService, IMyIdentityUserAppService
    {

        private readonly IDepartmentUserRepository _depratmentUserRepository;
        private readonly IIdentityUserAppService _identityUserAppService;
        private readonly IRepository<IdentityUser, Guid> _identityUserBase;
        private readonly IRepository<Department, Guid> _departmentBase;
        private readonly IRepository<DepartmentUser, Guid> _departmentUserBase;        
        private readonly IUserRoleFinder _userRoleFinder;
        private readonly IUnitOfWorkManager _unitOfWork;





        public MyIdentityUserAppService(          
            IRepository<IdentityUser, Guid> identityUserBase,
            IRepository<Department, Guid> departmentBase,
            IRepository<DepartmentUser, Guid> departmentUserBase,     
            IDepartmentUserRepository departmentUserRepository,
            IIdentityUserAppService identityUserAppService,       
            IUserRoleFinder userRoleFinder,
            IUnitOfWorkManager unitOfWork)
        {
            _identityUserBase = identityUserBase;
            _departmentBase = departmentBase;
            _departmentUserBase = departmentUserBase;          
            _depratmentUserRepository = departmentUserRepository;
            _identityUserAppService = identityUserAppService;                    
            _userRoleFinder = userRoleFinder;         
            _unitOfWork = unitOfWork;


        }

        public async Task<MyIdentityUserDto> CreateAsync(CreateMyIdentityUserDto input)
        {                                    
            var insertedUser = await _identityUserAppService.CreateAsync(input.User);
            await _depratmentUserRepository.AsignToDepartmentAsync(input.Department.Id, insertedUser.Id);
            return new MyIdentityUserDto { User = insertedUser, Department = input.Department };
        }

        public async Task<MyIdentityUserDto> UpdateAsync(Guid userId, UpdateMyIdentityUserDto input)
        {
            
            var user = await _identityUserBase.GetAsync(userId);
            var departmentUser = await _depratmentUserRepository.FindByUserId(userId);
           

            if(departmentUser == null)
            {
                await _depratmentUserRepository.AsignToDepartmentAsync(input.Department.Id, userId);
            }          
            else if(departmentUser.DepartmentId != input.Department.Id)
            {
                await _depratmentUserRepository.DeleteAsync(departmentUser);

                // Create a new DepartmentUser entity with the updated DepartmentId
                var newDepartmentUser = new DepartmentUser
                {
                    UserId = departmentUser.UserId, // Assuming UserId is not part of the primary key
                    DepartmentId = input.Department.Id // Assuming newDepartmentId is the new department ID
                };

                // Save the new DepartmentUser entity
                await _depratmentUserRepository.InsertAsync(newDepartmentUser);

                // Save changes to persist the changes
                await _unitOfWork.Current.SaveChangesAsync();
            }

            var updatedUser = await _identityUserAppService.UpdateAsync(userId, input.User);

            return new MyIdentityUserDto { User = updatedUser, Department = input.Department};
            
        }

        public async Task<Guid> DeleteAsync(Guid userId)
        {
            await _identityUserAppService.DeleteAsync(userId);

            return userId;
        }

        public async Task<PagedResultDto<MyIdentityUserDto>> GetListAsync(PagedAndSortedResultRequestDto input)           
        {
            

            var query = from user in await _identityUserBase.GetQueryableAsync()
                        join departmentUser in await _departmentUserBase.GetQueryableAsync() on user.Id equals departmentUser.UserId into departmentUsers
                        from departmentUser in departmentUsers.DefaultIfEmpty()
                        join department in await _departmentBase.GetQueryableAsync() on departmentUser.DepartmentId equals department.Id into departments
                        from department in departments.DefaultIfEmpty()
                        select new { User = user, Department = department };

            var queryResult = await AsyncExecuter.ToListAsync(query);

            var myIdentityDtos = queryResult.Select(x =>
            {              
                var myDto = new MyIdentityUserDto { User = ObjectMapper.Map<IdentityUser, IdentityUserDto>(x.User), Department = ObjectMapper.Map<Department, DepartmentDto>(x.Department)};                
                return myDto;
            })
            .Skip(input.SkipCount)
            .Take(input.MaxResultCount)
            .ToList();

            foreach(var dto in myIdentityDtos)
            {
                dto.Roles = await _userRoleFinder.GetRoleNamesAsync(dto.User.Id);
            }

            var totalCount = await _identityUserBase.GetCountAsync();

            return new PagedResultDto<MyIdentityUserDto>(
                totalCount,
                myIdentityDtos);
        }



    }
    



}
