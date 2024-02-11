using SHFT.Departments;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Identity;

namespace SHFT.MyIdentityUsers
{
    public class MyIdentityUserDto
    {
        public IdentityUserDto User { get; set; }
        public DepartmentDto Department { get; set; }
        public string[] Roles { get; set; }
    }
}
