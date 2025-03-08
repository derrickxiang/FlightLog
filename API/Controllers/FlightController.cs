using AutoMapper;
using Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public FlightController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<Flight>>> GetFlights()
        {
            return await _context.Flights.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Flight>> GetFlight(string id)
        {
            var flight = await _context.Flights.FindAsync(id);

            if (flight == null)
            {
                return NotFound();
            }

            return flight;
        }

        [HttpPost]
        public async Task<ActionResult<Flight>> CreateFlight(Flight flight)
        {
            _context.Flights.Add(flight);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFlight", new { id = flight.Id }, flight);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFlight(Flight flight)
        {
            var existFlight = await _context.Flights.FindAsync(flight.Id);
            if (existFlight == null)
            {
                return NotFound();
            }

            _mapper.Map(flight, existFlight);
            _context.Flights.Update(existFlight);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }

            return NoContent();
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFlight(string id)
        {
            var flight = await _context.Flights.FindAsync(id);
            if (flight == null)
            {
                return NotFound();
            }

            _context.Flights.Remove(flight);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FlightExists(string id)
        {
            var flight = _context.Flights.Find(id);
            return flight != null;

        }
    }
}
