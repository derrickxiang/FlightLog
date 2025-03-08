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
        protected MyProfiles()
        {
            CreateMap<Flight, Flight>();
        }
    }
}