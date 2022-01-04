using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ft_trancedence_Api.Migrations
{
    public partial class FriendsFieldAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("726d486d-a30a-430c-b38a-1db6ea85068e"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("fdc3d630-4af3-4935-95f6-a27e04d38ab4"));

            migrationBuilder.AddColumn<Guid>(
                name: "UserId",
                table: "Users",
                type: "uuid",
                nullable: true);

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AvatarUrl", "IsOnline", "PasswordHash", "UserId", "Username" },
                values: new object[,]
                {
                    { new Guid("e7aed70d-1399-403c-abbe-09e1afaa64dc"), null, false, "$2b$10$oW39ZH2XUpQXZ7NhJKdplOLWMVflVMDS.Grti4wIkuidWKqbedWD.", null, "test" },
                    { new Guid("f307e5c1-d5c7-4f52-8b66-e77d6b9e5942"), null, false, "$2b$10$r5kbpYX2GfIDV4Ye7pb32OZHfgc6AtPkcBWFLzn2vfJa28g2N/O8S", null, "test1" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_UserId",
                table: "Users",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Users_UserId",
                table: "Users",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Users_UserId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_UserId",
                table: "Users");

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("e7aed70d-1399-403c-abbe-09e1afaa64dc"));

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: new Guid("f307e5c1-d5c7-4f52-8b66-e77d6b9e5942"));

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Users");

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "AvatarUrl", "IsOnline", "PasswordHash", "Username" },
                values: new object[,]
                {
                    { new Guid("fdc3d630-4af3-4935-95f6-a27e04d38ab4"), null, false, "$2b$10$U6ci3NWaKdgy8wOmbEOzmOIpVNQ029IGXLcO5I9kTQcjIcnt5Z2/K", "test" },
                    { new Guid("726d486d-a30a-430c-b38a-1db6ea85068e"), null, false, "$2b$10$Q1iS3k24BQ1tmMEC.7MhSenKW.T0huCQZqdSkPPA3C4hyXdDfAebW", "test1" }
                });
        }
    }
}
