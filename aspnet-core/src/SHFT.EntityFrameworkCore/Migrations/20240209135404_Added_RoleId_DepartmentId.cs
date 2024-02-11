using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SHFT.Migrations
{
    /// <inheritdoc />
    public partial class Added_RoleId_DepartmentId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "DepartmentId",
                table: "AbpUsers",
                type: "uniqueidentifier",
                nullable: true,
                defaultValue: null);

            migrationBuilder.AddColumn<Guid>(
                name: "RoleId",
                table: "AbpUsers",
                type: "uniqueidentifier",
                nullable: true,
                defaultValue: null);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DepartmentId",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "RoleId",
                table: "AbpUsers");
        }
    }
}
