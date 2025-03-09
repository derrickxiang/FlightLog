using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Domain;

namespace API.Helpers
{
    public class MyProfiles : Profile
    {
        public MyProfiles()
        {
            CreateMap<Flight, Flight>();
        }
    }
}