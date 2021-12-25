using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ft_trancedence_Api.Migrations
{
    public partial class Initial1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false, defaultValueSql: "gen_random_uuid()"),
                    Username = table.Column<string>(type: "text", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: false),
                    AvatarUrl = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AvatarUrl", "PasswordHash", "Username" },
                values: new object[,]
                {
                    { new Guid("1957bd7d-766e-4de2-824f-8fa32cbdf503"), null, "$2b$10$nfye2ctg/cjhivTL5.yDlO1SsbLTcpIZFNXbNL8SYFtHaMLQ6tV6u", "test" },
                    { new Guid("a1f9f9bd-2db8-46d2-82df-11f828316287"), null, "$2b$10$/K2Fx6k9vX9lPSuqtx6CKe3CHtYsRcC0HqDS3ilca/1F/vC4RsIpW", "test1" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
