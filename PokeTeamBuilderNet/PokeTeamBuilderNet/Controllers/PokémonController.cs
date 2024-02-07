using Microsoft.AspNetCore.Mvc;
using PokeApiNet;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PokeTeamBuilderNet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PokémonController : ControllerBase
    {
        PokeApiClient apiClient = new PokeApiClient();

        [HttpGet(Name = "GetPokémon")]
        public async Task<Pokemon> Get()
        {
            Pokemon pikachu = await apiClient.GetResourceAsync<Pokemon>("pikachu");
            return pikachu;
        }
    }
}
