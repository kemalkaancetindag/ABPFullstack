using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace SHFT.Departments
{
    public class Department : FullAuditedAggregateRoot<Guid>
    {
        public string Name { get; set; }        
    }
}
