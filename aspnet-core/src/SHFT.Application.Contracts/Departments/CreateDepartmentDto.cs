using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SHFT.Departments
{
    public class CreateDepartmentDto
    {
        [Required]
        public string Name { get; set; }
    }
}
