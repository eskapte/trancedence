using ft_trancedence_Api.Models;
using ft_trancedence_Api.Services.UserManager;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace ft_trancedence_Api
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }


        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDbContext<ApplicationDbContext>(builder => 
            {
                builder.UseNpgsql(Configuration.GetConnectionString("DbConnection"));
            });

            services.AddCors(config =>
            {
                config.AddDefaultPolicy(policy =>
                {
                    policy.WithOrigins("http://localhost:3000")
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials();
                });
            });

            services.AddControllers(options =>
            {
                //options.AllowEmptyInputInBodyModelBinding = true;
            });

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(config =>
                {
                    config.TokenValidationParameters = new()
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = Configuration["Jwt:Issuer"],
                        ValidAudience = Configuration["Jwt:Audeince"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
                    };
                });

            //services.AddAuthorization();

            //services.AddSpaStaticFiles(config =>
            //{
            //    config.RootPath = "ReactApp/src";
            //});

            services.AddScoped<UserManager>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILogger<Startup> logger)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }


            //app.UseStaticFiles();
            //app.UseSpaStaticFiles();

            app.UseRouting();

            app.UseCors();

            app.UseAuthentication();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            //app.UseSpa(spa =>
            //{
            //    spa.Options.SourcePath = "ReactApp";
            //    spa.Options.DevServerPort = 3000;
            //    spa.UseReactDevelopmentServer(npmScript: "start");
            //});
        }
    }
}
