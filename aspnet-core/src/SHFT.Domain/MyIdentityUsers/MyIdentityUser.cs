using SHFT.Departments;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Identity;

namespace SHFT.MyIdentityUsers
{
    public class MyIdentityUser
    {
        public IdentityUser User { get; set; }
        public Department Department { get; set; }
    }
}
