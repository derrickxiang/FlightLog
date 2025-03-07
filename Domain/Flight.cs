using System;

namespace Domain;

public class Flight
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string TailNumber { get; set; }
    public required string FlightId { get; set; }
    public DateTime Takeoff { get; set; }
    public DateTime Landing { get; set; }
    public float Duration { get; set; }
    public DateTime CreateAt { get; set; }
    public string CreateBy { get; set; } = "System";
    public DateTime UpdateAt { get; set; }
    public string UpdateBy { get; set; } = "";
    public bool IsDeleted { get; set; } = false;
    public DateTime DeletedAt { get; set; }
    public string DeletedBy { get; set; } = "";
}
