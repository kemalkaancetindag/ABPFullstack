using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace SHFT.DepartmentUsers
{
    public class AsignUserToDepartmentDto
    {
        [Required]
        public Guid DepartmentId { get; set; }
        [Required]
        public Guid UserId { get; set; }
    }
}
