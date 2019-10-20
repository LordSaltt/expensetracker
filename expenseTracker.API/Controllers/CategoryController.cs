using System.Linq;
using System.Threading.Tasks;
using expenseTracker.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace expenseTracker.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly DataContext _context;
        public CategoriesController(DataContext context)
        {
            _context = context;

        }

        public async Task<IActionResult> GetAll() 
        {
            var categories = await _context.Category.ToListAsync();
            return Ok(categories);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSingle(int id)
        {
            var category = await _context.Category.FirstOrDefaultAsync(q=> q.Id == id);
            return Ok(category);

        }
    }
}