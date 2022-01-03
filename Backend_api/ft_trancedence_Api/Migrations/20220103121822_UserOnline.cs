using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ft_trancedence_Api.Migrations
{
    public partial class UserOnline : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("7fbe3424-ca0e-4550-b5b3-fa38aceb7cb4"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("c7e19d29-b919-4f4c-9287-c5da36df6a09"));

            migrationBuilder.AddColumn<bool>(
                name: "IsOnline",
                table: "Users",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AvatarUrl", "IsOnline", "PasswordHash", "Username" },
                values: new object[,]
                {
                    { new Guid("fdc3d630-4af3-4935-95f6-a27e04d38ab4"), null, false, "$2b$10$U6ci3NWaKdgy8wOmbEOzmOIpVNQ029IGXLcO5I9kTQcjIcnt5Z2/K", "test" },
                    { new Guid("726d486d-a30a-430c-b38a-1db6ea85068e"), null, false, "$2b$10$Q1iS3k24BQ1tmMEC.7MhSenKW.T0huCQZqdSkPPA3C4hyXdDfAebW", "test1" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("726d486d-a30a-430c-b38a-1db6ea85068e"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("fdc3d630-4af3-4935-95f6-a27e04d38ab4"));

            migrationBuilder.DropColumn(
                name: "IsOnline",
                table: "Users");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AvatarUrl", "PasswordHash", "Username" },
                values: new object[,]
                {
                    { new Guid("c7e19d29-b919-4f4c-9287-c5da36df6a09"), null, "$2b$10$760eyL.llbeilJwOisPkZOV8TkXpTZyRHVzqiflKnkB5H6PIiY38.", "test" },
                    { new Guid("7fbe3424-ca0e-4550-b5b3-fa38aceb7cb4"), null, "$2b$10$a/8EC7vgX3zH5corDbjl9.uOqx9MiOwGt4M5mDohxFIo3keS/0pdy", "test1" }
                });
        }
    }
}
