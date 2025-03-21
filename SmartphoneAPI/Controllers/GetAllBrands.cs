using DemoSmartphoneAPI.Classes;
using DemoSmartphoneAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace DemoSmartphoneAPI.Controllers
{
   [ApiController]
   [Route("[controller]")]
   public class GetAllBrands : ControllerBase
   {
      private readonly ILogger<GetAllBrands> _logger;

      public GetAllBrands(ILogger<GetAllBrands> logger)
      {
         _logger = logger;
      }

      [HttpGet]
      public List<Brand> GetAllBrandsInfo()
      {
         try
         {
            var brandList = new List<Brand>();
            var dataObj = new Data();
            dataObj.PopulateLists();

            var brands = dataObj.Brands;

            foreach (var brand in brands)
            {
               brandList.Add(brand);
            }

            return brandList;
         }
         catch(Exception e)
         {
            _logger.LogError(e.Message);
            return new List<Brand>();
         }
      }
   }
}
