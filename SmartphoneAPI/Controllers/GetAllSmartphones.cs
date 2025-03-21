using DemoSmartphoneAPI.Classes;
using DemoSmartphoneAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DemoSmartphoneAPI.Controllers
{
   [ApiController]
   [Route("[controller]")]
   public class GetAllSmartphones : ControllerBase
   {
      private readonly ILogger<GetAllSmartphones> _logger;

      public GetAllSmartphones(ILogger<GetAllSmartphones> logger)
      {
         _logger = logger;
      }

      [HttpGet]
      public List<SmartphoneInfo> GetAllSmartPhoneInfo()
      {
         try
         {
            var smartPhoneInfoList = new List<SmartphoneInfo>();
            var dataObj = new Data();
            dataObj.PopulateLists();

            var smartphones = dataObj.Smartphones;
            var brands = dataObj.Brandss;
            var specs = dataObj.Specs;
            var processors = dataObj.Processors;

            foreach (var smartphone in smartphones)
            {
               var smartphoneInfo = new SmartphoneInfo();
               var brand = brands.FirstOrDefault(b => b.BrandID == smartphone.BrandID);
               if (brand != null)
               {
                  var spec = specs.FirstOrDefault(s => s.SpecID == smartphone.SpecID);
                  if (spec != null)
                  {
                     if (spec.ProcessorID > 0)
                     {
                        var processor = processors.FirstOrDefault(p => p.ProcessorID == spec.ProcessorID);
                        if (processor != null)
                        {
                           smartphoneInfo.BatterySize = spec.BatterySize + " mAh";
                           smartphoneInfo.BrandID = brand.BrandID + "";
                           smartphoneInfo.BrandName = brand.BrandName + "";
                           smartphoneInfo.BrandNetWorth = "$" + brand.BrandNetWorth;
                           smartphoneInfo.Memory = spec.Memory + " GB";
                           smartphoneInfo.ModelID = smartphone.ModelID;
                           smartphoneInfo.ModelName = smartphone.ModelID;
                           smartphoneInfo.NumberOfCameras = spec.NumberOfCameras + "";
                           smartphoneInfo.Price = "$" + smartphone.Price;
                           smartphoneInfo.ProcessorID = processor.ProcessorID + "";
                           smartphoneInfo.SpecID = spec.SpecID + "";
                           smartphoneInfo.StorageSpace = spec.StorageSpace + " GB";
                           smartphoneInfo.ProcessorName = processor.ProcessorName;

                           if (spec.HasWirelessCharging)
                           {
                              smartphoneInfo.HasWirelessCharging = "Yes";
                           }
                           else
                           {
                              smartphoneInfo.HasWirelessCharging = "No";
                           }
                           smartPhoneInfoList.Add(smartphoneInfo);
                        }
                     }
                  }
               }

            }
            return smartPhoneInfoList;
         }
         catch(Exception e)
         {
            _logger.LogError(e.Message);
            return new List<SmartphoneInfo>();
         }
      }
   }
}
