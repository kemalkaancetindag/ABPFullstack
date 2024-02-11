using SHFT.Departments;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Identity;

namespace SHFT.DepartmentUsers
{
    public class DepartmentUser : Entity<Guid>
    {
        public virtual Guid DepartmentId {  get; set; }       
        public virtual Guid UserId {  get; set; }     
    }
}
