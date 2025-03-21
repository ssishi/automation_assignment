using DemoSmartphoneAPI.Models;
using System.Collections.Generic;

namespace DemoSmartphoneAPI.Classes
{
   public class Data
   {
      private List<Processor> processors = new List<Processor>();
      private List<Spec> specs = new List<Spec>();
      private List<Brand> brands = new List<Brand>();
      private List<Brand> brandss = new List<Brand>();
      private List<Smartphone> smartphones = new List<Smartphone>();
      public List<Processor> Processors { get => processors;}
      public List<Spec> Specs { get => specs;}

      public List<Brand> Brandss { get => brandss; }
      public List<Brand> Brands { get => brands;}
      public List<Smartphone> Smartphones { get => smartphones;}

      public void PopulateLists()
      {
         processors.Add(new Processor() { ProcessorID = 1, ProcessorName = "Snapdragon 710" });
         processors.Add(new Processor() { ProcessorID = 2, ProcessorName = "Snapdragon 795" });
         processors.Add(new Processor() { ProcessorID = 3, ProcessorName = "Snapdragon 8520" });
         processors.Add(new Processor() { ProcessorID = 4, ProcessorName = "MediaTek Q1400" });
         processors.Add(new Processor() { ProcessorID = 5, ProcessorName = "MediaTek S1575" });


         specs.Add(new Spec() { SpecID = 1, ProcessorID = 1, BatterySize = 4500, HasWirelessCharging = false, Memory = 4, NumberOfCameras = 1, StorageSpace = 128 });
         specs.Add(new Spec() { SpecID = 2, ProcessorID = 2, BatterySize = 3750, HasWirelessCharging = true, Memory = 6, NumberOfCameras = 3, StorageSpace = 128 });
         specs.Add(new Spec() { SpecID = 3, ProcessorID = 3, BatterySize = 4800, HasWirelessCharging = true, Memory = 8, NumberOfCameras = 3, StorageSpace = 256 });
         specs.Add(new Spec() { SpecID = 4, ProcessorID = 4, BatterySize = 5000, HasWirelessCharging = false, Memory = 8, NumberOfCameras = 3, StorageSpace = 512 });
         specs.Add(new Spec() { SpecID = 5, ProcessorID = 5, BatterySize = 4150, HasWirelessCharging = true, Memory = 6, NumberOfCameras = 2, StorageSpace = 128 });


         brandss.Add(new Brand() { BrandID = 1, BrandName = "Samsung", BrandNetWorth = 140000000});
         brandss.Add(new Brand() { BrandID = 2, BrandName = "Xiaomi", BrandNetWorth = 140000000 });
         brandss.Add(new Brand() { BrandID = 3, BrandName = "Oppo", BrandNetWorth = 140000000 });


         smartphones.Add(new Smartphone() { ModelID = "SAM_S21_PLUS", BrandID = 1, ModelName = "Galaxy S21 plus", Price = 999, SpecID = 3 });
         smartphones.Add(new Smartphone() { ModelID = "SAM_S20_ULTRA", BrandID = 1, ModelName = "Galaxy S20 ULTRA", Price = 895, SpecID = 2 });
         smartphones.Add(new Smartphone() { ModelID = "SAM_A32", BrandID = 1, ModelName = "Galaxy A32", Price = 425, SpecID = 1 });

         smartphones.Add(new Smartphone() { ModelID = "OPP_FIND_X5", BrandID = 3, ModelName = "Find X5", Price = 765, SpecID = 3 });
         smartphones.Add(new Smartphone() { ModelID = "OPP_FIND_V46", BrandID = 3, ModelName = "Find v46", Price = 215, SpecID = 1 });
         smartphones.Add(new Smartphone() { ModelID = "OPP_FIND_32_A", BrandID = 3, ModelName = "Find 32a", Price = 199, SpecID = 5 });

         smartphones.Add(new Smartphone() { ModelID = "XIA_MI11_T", BrandID = 2, ModelName = "Mi 11T", Price = 899, SpecID = 3 });
         smartphones.Add(new Smartphone() { ModelID = "XIA_MI10_S", BrandID = 2, ModelName = "Mi 10s", Price = 455, SpecID = 5 });
         smartphones.Add(new Smartphone() { ModelID = "XIA_NOTE_12", BrandID = 2, ModelName = "Note 12", Price = 399, SpecID = 4 });
      }

   }
}
