using AutoMapper;
using SHFT.Departments;

namespace SHFT;

public class SHFTApplicationAutoMapperProfile : Profile
{
    public SHFTApplicationAutoMapperProfile()
    {
        CreateMap<Department, DepartmentDto>();
    }
}
