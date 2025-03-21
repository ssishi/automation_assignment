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
   public class GetAllProcessors : ControllerBase
   {
      private readonly ILogger<GetAllProcessors> _logger;

      public GetAllProcessors(ILogger<GetAllProcessors> logger)
      {
         _logger = logger;
      }

      [HttpGet]
      public List<Processor> GetAllProcessorsInfo()
      {
         try
         {
            var processorList = new List<Processor>();
            var dataObj = new Data();
            dataObj.PopulateLists();

            var processors = dataObj.Processors;

            foreach (var processor in processors)
            {
               processorList.Add(processor);
            }

            return processorList;
         }
         catch(Exception e)
         {
            _logger.LogError(e.Message);
            return new List<Processor>();
         }
      }
   }
}
