using System;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence;

public class DbInitialize
{
    public static async Task SeedData(AppDbContext context,
        UserManager<User> userManager
    )
    {
        if (!userManager.Users.Any())
        {
            var user = new User
            {
                UserName = "admin@test.com",
                Email = "admin@test.com"
            };

            await userManager.CreateAsync(user, "Secret123$");
        }

        if (context.Flights.Any())
            {
                return;
            }

        var flights = new List<Flight>
        {
            new Flight
            {
                TailNumber = "N12345",
                FlightId = "AA123",
                Takeoff = DateTime.Now,
                Landing = DateTime.Now.AddHours(2),
                Duration = 2,
                CreateAt = DateTime.Now,
                UpdateAt = DateTime.Now
            },
            new Flight
            {
                TailNumber = "N54321",
                FlightId = "BB123",
                Takeoff = DateTime.Now,
                Landing = DateTime.Now.AddHours(3),
                Duration = 3,
                CreateAt = DateTime.Now,
                UpdateAt = DateTime.Now
            },
            new Flight
            {
                TailNumber = "N67890",
                FlightId = "CC123",
                Takeoff = DateTime.Now,
                Landing = DateTime.Now.AddHours(4),
                Duration = 4,
                CreateAt = DateTime.Now,
                UpdateAt = DateTime.Now
            },
            new Flight
            {
                TailNumber = "N09876",
                FlightId = "DD123",
                Takeoff = DateTime.Now,
                Landing = DateTime.Now.AddHours(5),
                Duration = 5,
                CreateAt = DateTime.Now,
                UpdateAt = DateTime.Now
            }
        };

        await context.Flights.AddRangeAsync(flights);
        await context.SaveChangesAsync();
    }
}
