using Microsoft.AspNetCore.Mvc;
using PokeApiNet;
using GraphQL.AspNet;
using GraphQL.AspNet.Controllers;
using GraphQL.AspNet.Attributes;
using System.Text.Json.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PokeTeamBuilderNet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PokémonController : GraphController
    {
        private readonly PokeApiClient apiClient;

        public PokémonController(PokeApiClient apiClient)
        {
            this.apiClient = apiClient;
        }

        [QueryRoot("Pokemon")]
        public async Task<Pokemon> Get()
        {
            Pokemon pikachu = await apiClient.GetResourceAsync<Pokemon>("pikachu");
            return pikachu;
        }
    }
}
