using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SHFT.Departments
{
    public class UpdateDepartmentDto
    {
        [Required]
        public string Name { get; set; }
    }
}
