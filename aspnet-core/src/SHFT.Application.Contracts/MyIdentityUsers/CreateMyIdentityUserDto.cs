using SHFT.Departments;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Identity;

namespace SHFT.MyIdentityUsers
{
    public class CreateMyIdentityUserDto
    {
        public IdentityUserCreateDto User { get; set; }
        public DepartmentDto Department { get; set; }
        
    }
}
