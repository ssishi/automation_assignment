using DemoSmartphoneAPI.Classes;
using DemoSmartphoneAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Net;

namespace DemoSmartphoneAPI.Controllers
{
   [ApiController]
   [Route("[controller]")]
   public class AddProcessor : ControllerBase
   {
      private readonly ILogger<AddProcessor> _logger;

      public AddProcessor(ILogger<AddProcessor> logger)
      {
         _logger = logger;
      }

      [HttpPost]
      public IActionResult AddProcessorInfo(Processor processor)
      {
         try
         {
            var valid = false;
            if(processor.ProcessorID < 7 && processor.ProcessorName.Length > 0)
            {
               valid = true;
            }
            if(!valid)
            {
               return BadRequest("Processor Information is not valid.");
            }   
            else
            {
               return Ok("New process added.");
            }
         }
         catch(Exception e)
         {
            _logger.LogError(e.Message);
            return BadRequest(e.Message);
         }
      }
   }
}
